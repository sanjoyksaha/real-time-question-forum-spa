<template>
    <div>
        <v-card class="elevation-4 mb-2">
            <v-card-title class="headline">
                <router-link :to="question.path" class="link">{{question.title}}</router-link>
            </v-card-title>
                
            <v-card-subtitle class="pb-0" color="grey">{{question.user}} said {{question.created_at}}</v-card-subtitle>
                
            <v-card-text class="error--text mt-4" v-html="body">
                <!-- {{question.body}} -->
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['question'],

        computed: {
            body() {
                return md.parse(this.question.body)
            }
        }
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
    }
</style>