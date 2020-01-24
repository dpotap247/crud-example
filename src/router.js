import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  
  routes: [
  { path: '/', component: () => import ('./components/Index.vue')},
  { path: '/view/:id', component: () => import ('./components/View.vue')},
  { path: '/update/:id', component: () => import ('./components/Update.vue')},
  { path: '/create', component: () => import ('./components/Create.vue')}
  ]
})

export default router