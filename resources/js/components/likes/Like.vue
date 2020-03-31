<template>
    <div>
        <v-btn icon @click="like">
            <v-icon color="red" v-html="liked ? 'mdi-heart' : 'mdi-heart-outline'"></v-icon> {{count}}
        </v-btn>
    </div>
</template>

<script>
export default {
    props: ['data'],
    
    data() {
        return {
            liked: this.data.liked,
            count:this.data.like_count,
        }
    },

    methods: {
        like() {
            if(User.loggedIn()) {
                this.liked ? this.decrement() : this.increment()
                this.liked = !this.liked
            }
        },

        increment() {
            axios.post(`/api/like/${this.data.id}`)
                .then(res => {
                    this.count ++;
                })
                .catch(error => console.log(error.response.data))
        },

        decrement() {
            axios.delete(`/api/like/${this.data.id}`)
                .then(res => {
                    this.count --;
                })
                .catch(error => console.log(error.response.data))
        }
    }
}
</script>