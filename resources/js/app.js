require('./bootstrap');

import  Vue from  'vue'
import router from './router'

//window.Vue = require('vue')

Vue.component('mainapp',require('./component/mainapp.vue').default)

const app = new Vue({
    el : '#app',
    router
})