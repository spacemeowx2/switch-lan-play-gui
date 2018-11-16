import Vue from 'vue'
import Router from 'vue-router'
import ServerList from './components/ServerList.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'ServerList',
    path: '/',
    component: ServerList
  }]
})
