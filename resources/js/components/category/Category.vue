<template>
    <div>
        <v-container>
                <v-card class="elevation-4">
                    <v-card-title class="red--background"  v-html="editSlug ? 'Update Category' : 'Create Category'"></v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="submit">

                            <v-text-field v-model="form.name" type="text" label="Category Name" required autocomplete="off"></v-text-field>
                            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

                            <v-card-actions>
                                <!-- <v-btn color="pink" dark type="submit" v-if="editSlug">Update</v-btn> -->
                                <v-btn :color="editSlug ? 'pink' : 'primary'" dark type="submit" v-html="editSlug ? 'Update' : 'Create'"></v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
                <v-card class="elevation-4 mt-4 tile">
                    <v-toolbar color="pink" dark>
                        <v-toolbar-title>All Categories</v-toolbar-title>
                    </v-toolbar>
                    <v-list rounded>
                        <v-list-item-group v-for="(category, index) in categories" :key="category.slug" >
                            <v-list-item>
                                <v-list-item-action>
                                    <v-btn icon @click="edit(index)">
                                        <v-icon color="teal">mdi-pencil</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{category.name}}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn icon @click="destroy(category.slug, index)">
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-list-item-group>
                    </v-list>
                </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
            },
            errors: {},
            categories: {},
            editSlug: false,
        }
    },

    created() {
        if(!User.admin()) {
            this.$router.push('/forum')
        }
        axios.get('/api/category')
            .then(res => this.categories = res.data.data)
    },

    methods: {
        submit() {
            this.editSlug ? this.update() : this.create()
        },

        create() {
            axios.post('/api/category',this.form)
                .then(res => {
                    this.categories.unshift(res.data)
                    this.form.name = null
                })
                .catch(error => this.errors = error.response.data.errors)
        },

        destroy(slug, index) {
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index, 1))
        },

        edit(index) {
            this.form.name = this.categories[index].name;
            this.editSlug = this.categories[index].slug;
            this.categories.splice(index, 1);
        },

        update() {
            axios.patch(`/api/category/${this.editSlug}`,this.form)
                .then(res => {
                    this.categories.unshift(res.data)
                    this.form.name = null
                    this.editSlug = false
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>