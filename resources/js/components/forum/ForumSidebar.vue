<template>
    <v-card class="elevation-4 mb-2 tile">
        <v-toolbar color="pink" dark>
            <v-toolbar-title>Category</v-toolbar-title>
        </v-toolbar>
        <v-list rounded>
            <!-- <v-subheader>REPORTS</v-subheader> -->
            <v-list-item-group v-if="categories">
                <v-list-item v-for="category in categories" :key="category.slug"  >
                    <v-list-item-content>
                        <v-list-item-title>{{category.name}} ({{category.question_count}})</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            categories: {},
        }
    },

    created() {
        axios.get('/api/category')
            .then(res => this.categories = res.data.data)
    },

}
</script>