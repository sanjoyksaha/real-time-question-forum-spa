require('./bootstrap');

// window.Vue = require('vue');

import Vue from 'vue'

// Import Vuetify
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Import Markdown
import VueSimplemde from 'vue-simplemde'

Vue.component('vue-simplemde', VueSimplemde)

import md from 'marked'
window.md = md

//Import helper class
import User from './Helpers/User'
window.User = User;

//Global EventBus
window.EventBus = new Vue();

//Default Component
Vue.component('app-home', require('./components/AppHome.vue').default);

//import Vue Router
import router from './Router/router'

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify,
    router,
});
