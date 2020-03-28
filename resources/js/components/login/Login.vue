<template>
    <div>
        <v-container>
             <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card class="elevation-12">
                        <!-- <v-toolbar color="primary" dark flat> -->
                            <v-card-title class="red--background">Login</v-card-title>
                        <!-- </v-toolbar> -->
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field v-model="form.email" type="email" label="E-mail" required autocomplete="off"></v-text-field>
                                <v-text-field v-model="form.password" type="password" label="Item" required></v-text-field>

                                <v-card-actions>
                                    <v-spacer />
                                    <v-btn color="primary" type="submit">Login</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
             </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
            }
        },

        methods: {
            login() {
                User.login(this.form)
            }
        },
    }
</script>

<style scoped>

</style>