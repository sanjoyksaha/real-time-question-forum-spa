<template>
  	<v-card color="grey lighten-4" flat tile>
    	<v-toolbar dense>

			<v-toolbar-title>QuestionForumApp</v-toolbar-title>

			<v-spacer></v-spacer>
			
			<app-notification v-if="logged"></app-notification>

			<router-link v-for="item in items" :key="item.title" :to="item.to">
				<v-btn text v-if="item.show">{{item.title}}</v-btn>
			</router-link>
			
    	</v-toolbar>
  	</v-card>
</template>

<script>
	import AppNotification from './AppNotification'
    export default {
		components: {
			AppNotification,
		},
      	data() {
			return {
				logged: User.loggedIn(),
				items: [
					{title:'Forum', to:'/forum', show:true},
					{title:'Ask Questions', to:'/ask-questions', show: User.loggedIn()},
					{title:'Category', to:'/category', show: User.loggedIn() && User.admin()},
					{title:'MyQuestions', to:'/category', show: User.loggedIn() && User.id()},
					{title:'LogIn', to:'/login', show: !User.loggedIn()},
					{title:User.user_name(), to:'/logout', show: User.loggedIn()},
				],
			}
		},
		  
		created() {
			EventBus.$on('logout', ()=> {
				User.logOut();
			});
		}
    }
</script>
<style scoped>

</style>