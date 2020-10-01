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
  console.log('router=>',router)
  console.log('role=>', Cookies.get('role'))
  console.log('to=>', to)
  // if(!to.meta.permissions){
  //   //不需要权限就不用管啦，直接next完事
  //   next()
  //   return
  // }
  let role = Cookies.get('role')
  let accessToken = Cookies.get('access_token')
  let permissions = to.meta.permissions
  // const store =useStore()
  // debugger
  
  if (accessToken) {
    //有token
    if (to.path === '/login') {
      //已登录直接跳到首页
      next({ path: '/' })
    }
    role = decryptVal(role)
    // if(role){
    //   debugger
    //   store.dispatch('setMenuList',role)
      
    // }
    if (permissions) {
      //有权限
      
      if (permissions.includes(role)) {
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      next()
    }
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next({ path: '/login' })
    }
  }
  // next()
  // next()
  // if(!role && !accessToken){
  //   // role不存在，未登录，跳登录页
  //   next({
  //     path: '/login'
  //   })
  //   return
  // }
  // next()
})
export default router
