<template>
    <div>
        <v-container>
             <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <!-- <v-toolbar color="primary" dark flat> -->
                            <v-card-title class="red--background">SignUp</v-card-title>
                        <!-- </v-toolbar> -->
                        <v-card-text>
                            <v-form @submit.prevent="signup">
                                <v-text-field v-model="form.name" type="text" label="Name" required autocomplete="off"></v-text-field>
                                <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
                                <v-text-field v-model="form.email" type="email" label="E-mail" required autocomplete="off"></v-text-field>
                                <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
                                <v-text-field v-model="form.password" type="password" label="Passowrd" required></v-text-field>
                                <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
                                <v-text-field v-model="form.password_confirmation" type="password" label="Confirm Password" required></v-text-field>
                                <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>

                                <v-card-actions>
                                    <v-spacer />
                                    <router-link to="/login" class="routerLink ma-2">
                                        <v-btn color="green">login</v-btn>
                                    </router-link>
                                    <v-btn color="primary" type="submit">signup</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
             </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },

                errors:{}
            }
        },

        created() {
            if(User.loggedIn) {
                this.$router.push({name: 'forum'})
            }
        },

        methods: {
            signup() {
                axios.post('/api/auth/register', this.form)
                    .then(res => {
                        User.responseAfterLogin(res)
                        this.$router.push({name: 'forum'})
                    })
                    .catch(error => this.errors = error.response.data.errors)
            }
        },
    }
</script>

<style scoped>
.routerLink{
        text-decoration: none;
    }
</style>