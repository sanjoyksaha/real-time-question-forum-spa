import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from "../components/login/Login"
import SignUp from "../components/signup/SignUp"
import LogOut from "../components/logout/LogOut"
import Forum from "../components/forum/Forum"
import SingleQuestion from "../components/forum/SingleQuestion"
import Create from "../components/forum/CreateQuestion"
import Edit from "../components/forum/EditQuestion"

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: SignUp },
    { path: '/logout', component: LogOut },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: SingleQuestion },
    { path: '/ask-questions', component: Create },
    { path: '/edit', component: Edit },
  ]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history',
})

export default router