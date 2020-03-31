<template>
    <div>
        <v-container>
            <h1 class="mb-2 pa-3 green elevation-4">All Replies</h1>
            <reply v-for="(reply, index) in content" :index="index" :key="reply.id" :data=reply ></reply>
        </v-container>
    </div>
</template>

<script>
import Reply from './Reply'
    export default {
        components: {
            Reply,
        },

        props: ['question'],

        data() {
            return {
                content: this.question.replies
            }
        },

        created() {
            this.listen();
        },

        methods: {
            listen() {
                EventBus.$on('newReply', (reply) => {
                    this.content.unshift(reply)
                })

                EventBus.$on('deleteReply', (index) => {
                    axios.delete(`/api/question/${this.question.slug}/reply/${this.content[index].id}`)
                        .then(res => {
                            this.content.splice(index, 1)
                        })
                })
            }
        }
    }
</script>

<style scoped>

</style>