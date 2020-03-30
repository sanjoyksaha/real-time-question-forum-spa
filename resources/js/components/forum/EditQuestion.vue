<template>
    <div>
        <v-container>
            <v-card class="elevation-12">
                <v-card-title class="red--background">Edit Question</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="edit">

                        <!-- <v-autocomplete  v-model="form.category_id" :items="categories" item-text="name" item-value="id" label="Category"></v-autocomplete> -->

                        <v-text-field v-model="form.title" type="text" label="Title" required autocomplete="off"></v-text-field>

                        <vue-simplemde v-model="form.body" ref="markdownEditor" />

                        <v-card-actions>
                            <v-btn icon type="submit">
                                <v-icon color="teal">mdi-content-save</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon color="red" @click="cancel">mdi-cancel</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    props: ['data'],

    data() {
        return {
            form: {
                // category_id: null,
                title: null,
                body: null,
            },
            // categories: [],
        }
    },

    created() {
        this.form = this.data
        // this.getCategory()
    },

    methods: {
        // getCategory() {
        //     axios.get('/api/category')
        //         .then(res => this.categories = res.data.data)
        // }

        cancel() {
            EventBus.$emit('cancelEditing')
        },

        edit() {
            axios.patch(`/api/question/${this.form.slug}`,this.form)
                .then(res => this.cancel())
        }
    }
}
</script>