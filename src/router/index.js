import { createRouter, createWebHistory } from 'vue-router'
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
