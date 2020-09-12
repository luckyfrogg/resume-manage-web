import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/job',
    // component: () => import('@/pages/job/apply')
  },
  {
    path: '/job',
    name: 'Job',
    redirect:{ name: 'JobApply' },
    // component: () => import('@/pages/job/apply')
  },
  {
    //职位申请页面
    path: '/job/apply',
    name: 'JobApply',
    component: () => import('@/pages/job/apply/index')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
