import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from "../components/login/Login"
import SignUp from "../components/signup/SignUp"
import LogOut from "../components/logout/LogOut"
import Forum from "../components/forum/Forum"

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: SignUp },
    { path: '/logout', component: LogOut },
    { path: '/forum', component: Forum, name: 'forum' },
  ]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history',
})

export default router