<template>
    <div v-if="question">
        <edit-question v-if="editing" :data=question></edit-question>
        <show-question v-else :data=question></show-question>
        <replies :question="question"></replies>
        <new-reply :qReply="question.slug"></new-reply>
        
    </div>
</template>

<script>
    import ShowQuestion from './ShowQuestion'
    import EditQuestion from './EditQuestion'
    import Replies from '../reply/Replies'
    import NewReply from '../reply/NewReply'
    export default {
        components: {
            ShowQuestion, EditQuestion, Replies, NewReply
        },

        data() {
            return {
                question: null,
                editing: false,
            }
        },

        created(){
            this.listen()
            this.getQuestion()
        },

        methods: {
            listen() {
                EventBus.$on('startEditing', ()=>{
                    this.editing = true;
                })

                EventBus.$on('cancelEditing', ()=>{
                    this.editing = false;
                })
            },

            getQuestion() {
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then((res) => {
                        this.question = res.data.data
                    })
                    .catch(() => console.log("error"))  
            }
        }
    }
</script>