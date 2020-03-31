<template>
    <div>
        <v-container fluid grid-list-md>
             <v-row>
                <v-col cols="12" sm="8" md="8">
                    <question v-for="question in questions" :key="question.path" :question=question></question>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <forum-sidebar></forum-sidebar>
                </v-col>   
             </v-row>
        </v-container>
    </div>
</template>

<script>

    import Question from './Question'
    import ForumSidebar from './ForumSidebar'
    export default {
        components: {
            Question, ForumSidebar,
        },

        data() {
            return {
                questions:{},
            }
        },

        created() {
            axios.get('/api/question')
                .then(res => {
                    this.questions = res.data.data
                })
                .catch(error => console.log(error.response.data))
        },
    }
</script>

<style scoped>

</style>