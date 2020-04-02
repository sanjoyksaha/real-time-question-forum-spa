<template>
    <div>
        <!-- <v-container> -->
            <v-card class="elevation-4">
                <v-card-text>
                    <vue-simplemde v-model="body" ref="markdownEditor" />
                    <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="deep-orange ml-2" @click="submit">Reply</v-btn>
                </v-card-actions>
            </v-card>
        <!-- </v-container> -->
    </div>
</template>

<script>
export default {
    props: ['qReply'],

    data() {
        return {
            body: null,
            errors: {},
        }  
    },

    methods: {
        submit() {
            axios.post(`/api/question/${this.qReply}/reply`,{body:this.body})
                .then(res => {
                    this.body = ''
                    EventBus.$emit('newReply', res.data.reply)
                    window.scroll(0,0);
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>