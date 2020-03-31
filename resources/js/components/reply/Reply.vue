<template>
    <div>
        <v-card class="elevation-4 mb-2">
            <v-card-title>
                {{data.user}}
                <v-spacer></v-spacer>
                <like :data=data></like>
            </v-card-title>
            
            <v-card-subtitle class="blue-grey--text">{{data.created_at}}</v-card-subtitle>
            

            

            <edit-reply v-if="editing" :reply=data></edit-reply>
            <v-card-text v-html="reply" class="indigo--text" v-else></v-card-text>
            <div v-if="!editing">
                <v-card-actions class="ml-2" v-if="own">
                    <v-btn icon>
                        <v-icon color="green" @click="edit">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon color="red" @click="destroy">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
    import EditReply from './EditReply'
    import Like from '../likes/Like'
    export default {
        props: ['data', 'index'],

        components: {
            EditReply, Like,
        },

        data() {
            return {
                own: User.own(this.data.user_id),
                editing: false,
            } 
        },

        computed: {
            reply() {
                return md.parse(this.data.reply)
            }
        },

        created() {
            this.listen()
        },

        methods: {
            edit() {
                this.editing = true
            },

            destroy() {
                EventBus.$emit('deleteReply', this.index)
            },

            listen() {
                EventBus.$on('cancel', () => {
                    this.editing = false
                })
            }
        }
    }
</script>