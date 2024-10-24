import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameComponent from '@/components/GameComponent.vue'
import Game1Component from '@/components/Game1Component.vue'
import Game2Component from '@/components/Game2Component.vue'
import Game3Component from '@/components/Game3Component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
   {
    path:'/game', component:GameComponent
   },
   {
    path:'/jeu1', component:Game1Component
   },
   {
    path:'/jeu2', component:Game2Component
   },
   {
    path:'/jeu3', component:Game3Component
   }
  ],
})

export default router
