import { createRouter, createWebHistory } from 'vue-router'
import {constantRoutes,asyncRoutes} from './routes'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:constantRoutes
})

export default router
