
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

import 'vuetify/dist/vuetify.min.css'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin', require('./components/Admin.vue').default);

import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Users from './pages/Users'

const routes = [
  {
      path: '/admin',
      component: Dashboard
  },
  {
      path: '/admin/users',
      component: Users
  },
  {
      path: '/admin/settings',
      component: Settings
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
