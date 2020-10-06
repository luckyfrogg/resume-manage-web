import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes, asyncRoutes } from './routes'
import { decryptVal } from '@/utils/tools.js'
// import { useStore } from "vuex";
import Cookies from 'js-cookie'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes.concat(asyncRoutes)
})
// router.addRoute([...asyncRoutes])
router.beforeEach((to, from, next) => {
  console.log('router=>', router)
  console.log('role=>', Cookies.get('role'))
  console.log('to=>', to)
  let role = Cookies.get('role')
  let accessToken = Cookies.get('access_token')
  let permissions = to.meta.permissions
  if (accessToken) {
    //有token
    if (to.path === '/login') {
      //已登录直接跳到首页
      next({ path: '/' })
      return
    }
    try {
      role = decryptVal(role)
    } catch (error) {
      Cookies.remove('role')
      Cookies.remove('access_token')
      next({ path: '/login' })
    }
    if (permissions) {
      //有权限
      // debugger
      if (permissions.includes(role)) {
        next()
      } else {
        Cookies.remove('role')
        Cookies.remove('access_token')
        next({ path: '/login' })
      }
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      Cookies.remove('role')
      Cookies.remove('access_token')
      next({ path: '/login' })
    }
  }
})
export default router
