import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Streak from '@/components/Streak.vue'
import SetTime from '@/components/SetTime.vue';
import LoaedHome from '@/components/LoaedHome.vue';
import Learn from '@/components/Learn.vue';
import GameOver from '@/components/GameOver.vue';
import Score from '@/components/Score.vue';
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
  {
    path: '/streak',
    component: Streak
  },
  {
    path: '/setTime',
    component: SetTime
  },
  {
    path: '/learn',
    component: Learn
  },

  {
    path: '/loaedhome',
    component: LoaedHome
  },

  {
    path: '/gameover',
    component: GameOver
  },
  
  { path: '/score/:score', 
    component: Score
  }

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

