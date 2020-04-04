<template>
    <div>
        <v-container>
            <v-card class="elevation-12">
                <v-card-title class="red--background">Ask A Question?</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="create">

                        <v-autocomplete  v-model="form.category_id" :items="categories" item-text="name" item-value="id" label="Category"></v-autocomplete>
                        <span class="red--text" v-if="errors.category_id">{{errors.category_id[0]}}</span>
                        <v-text-field v-model="form.title" type="text" label="Title" required autocomplete="off"></v-text-field>
                        <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>
                        <vue-simplemde v-model="form.body" ref="markdownEditor" />
                        <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>
                        <v-card-actions>
                            <v-btn color="primary" type="submit">Create</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    title: null,
                    category_id: null,
                    body: null,
                },

                categories: [],
                errors: {}
            }
        },

        created() {
            if(!User.loggedIn()) {
                this.$router.push('/login')
            }
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },

        methods: {
            create() {
                axios.post('/api/question',this.form)
                    .then(res => {
                        this.$router.push(res.data.path)
                    })
                    .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>