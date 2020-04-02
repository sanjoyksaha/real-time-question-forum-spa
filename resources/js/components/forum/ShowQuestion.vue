<template>
    <div>
        <v-container fluid grid-list-md>
            <v-card class="elevation-4 mb-2">
                <v-card-title class="headline">
                    {{data.title}}
                    <v-spacer></v-spacer>
                    <v-btn color="error">{{data.reply_count}} replies</v-btn>
                    <router-link :to="`/forum`" class="ml-2">
                        <v-btn color="light-blue">Back</v-btn>
                    </router-link>
                </v-card-title>
                    
                <v-card-subtitle class="pb-0" color="grey">{{data.user}} said {{data.created_at}}</v-card-subtitle>
                    
                <v-card-text v-html="body" class="my-5 text--primary"></v-card-text>

                <!-- <v-card-action>
                    
                </v-card-action> -->
                <v-card-actions v-if="own">
                    <v-btn icon @click="edit">
                        <v-icon color="teal">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon @click="destroy">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
                
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        props: ['data'],

        data() {
            return {
                own: User.own(this.data.user_id),
                //reply_count: this.data.reply_count,
            }
        },

        // created() {
        //     Echo.private('App.User.' + User.id())
        //         .notification((notification) => {
        //             // this.data.unshift(notification);
        //             this.reply_count ++;
        //         });
        // },

        computed: {
            body() {
                return md.parse(this.data.body)
            }
        },

        methods: {
            edit() {
                EventBus.$emit('startEditing')
            },

            destroy() {
                axios.delete(`/api/question/${this.data.slug}`)
                    .then(res => this.$router.push("/forum"))
                    .catch(error => console.log(error.response.data))
            }
        }
    }
</script>