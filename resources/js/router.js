import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstpage from './component/pages/myFirstVuePage.vue'
const routes = [
    {
        path : '/my-first-vue-page',
        component : firstpage
    }
]

export default new Router({
    mode:'history',
    routes
})