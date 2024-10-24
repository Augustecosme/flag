import { createRouter, createWebHistory } from 'vue-router'
import Streack from '@/components/Streack.vue'
import Home from '@/components/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/streack',
      name: 'streack',
      component: Streack,
    },
    {
      path: '/',
      name: 'about',
      component: Home
    },
   ]
})

export default router
