import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8e4a5a1afe304824ea801498ca183f3822677d09
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
let isAuthenticated = false;
const routes = [
  {
    path: '/home',
    component: HomeView,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/',
    component: LoginView
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/'); 
  } else {
    next(); 
  }
});


export function setAuthentication(status) {
  isAuthenticated = status;
}

export default router;
<<<<<<< HEAD
>>>>>>> 8e4a5a1afe304824ea801498ca183f3822677d09
=======
>>>>>>> 8e4a5a1afe304824ea801498ca183f3822677d09
