import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    login(data){
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
                //Token.payload(response.data.access_token)
                //console.log(response.data)
            //})
            .catch(error =>
                console.log(error.response.data)
            )
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const user_name = res.data.user
        
        if(Token.isValid(access_token)) {
            AppStorage.store(access_token, user_name)
            window.location = '/forum'
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();

        if(storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }

        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logOut() {
        AppStorage.clear()
        window.location = '/forum'
    }

    user_name() {
        if(this.loggedIn) {
            return AppStorage.getUser();
        }
    }

    id() {
        if(this.loggedIn) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id) {
        return this.id() == id
    }
}

export default User = new User();