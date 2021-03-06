import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Species from '../views/Species.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'http://www.bloowatch.org/images/:slug',
  },
  {
    path: 'img/icons/:slug',
  },
  {
    path: '/species/:id',
    name: 'Species',
    component: Species
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
