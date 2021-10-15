import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/kids',
    name: 'Kids',
    component: () => import('../views/Kids.vue')
  },
  {
    path: '/adult',
    name: 'Adult',
    component: () => import('../views/Adult.vue')
  },
  {
    path: '/hospital',
    name: 'Hispital',
    component: () => import('../views/Hospital.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
