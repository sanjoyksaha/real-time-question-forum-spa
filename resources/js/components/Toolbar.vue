<template>
  	<v-card color="grey lighten-4" flat tile>
    	<v-toolbar dense>
			<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

			<v-toolbar-title>QuestionForumApp</v-toolbar-title>

			<v-spacer></v-spacer>
			
			<router-link to="/forum">
				<v-btn text>Forum</v-btn>
			</router-link>

			<router-link to="#">
				<v-btn text>Ask Questions</v-btn>
			</router-link>

			<router-link to="#">
				<v-btn text>Category</v-btn>
			</router-link>
			
			<router-link to="/login">
				<v-btn text>Login</v-btn>
			</router-link>
			
    	</v-toolbar>
  	</v-card>
</template>

<script>
    export default {
      
    }
</script>
<style scoped>

</style>