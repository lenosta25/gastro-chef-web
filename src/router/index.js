import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LunchesView from '../views/LunchesView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lunches',
    name: 'lunches',
    component: LunchesView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
