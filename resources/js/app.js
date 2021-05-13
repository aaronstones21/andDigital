/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import routes from './routes';
import Vuex from 'vuex'
import store from "./components/Customer/src/store"
import adminStore from "./components/Admin/src/store"
import authStore from "./components/Authentication/src/store"

Vue.use(Vuex)
Vue.use(VueRouter)



const app = new Vue({
    el: '#app',
    router:new VueRouter(routes),
    store,
    adminStore,
    authStore
});
