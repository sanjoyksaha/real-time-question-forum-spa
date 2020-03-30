<template>
    <div>
        <v-container fluid grid-list-md>
             <v-row>
                <v-col cols="12" sm="8" md="8">
                    <question v-for="question in questions" :key="question.path" :question=question></question>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-card class="elevation-12">
                        <v-card-title>Category</v-card-title>
                        <v-card-text>
                        </v-card-text>
                    </v-card>
                </v-col>   
             </v-row>
        </v-container>
    </div>
</template>

<script>

    import question from './Question'
    export default {
        components: {
            question,
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
        }
    }
</script>

<style scoped>

</style>