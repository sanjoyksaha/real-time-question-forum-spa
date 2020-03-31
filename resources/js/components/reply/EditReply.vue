<template>
    <div>
        <v-container>
            <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
            <v-card-actions>
                <v-btn icon>
                    <v-icon color="green" @click="update">mdi-content-save</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon color="red" @click="cancel">mdi-cancel</v-icon>
                </v-btn>
            </v-card-actions>
        </v-container>
    </div>
</template>

<script>
export default {
    props: ['reply'],

    methods:{
        update() {
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body:this.reply.reply})
                .then(res => this.cancel())
        },

        cancel(reply) {
            EventBus.$emit('cancel', reply);
        }
    }
}
</script>