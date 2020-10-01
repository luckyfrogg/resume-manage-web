import { createStore } from 'vuex'
import { asyncRoutes, constantRoutes } from "@/router/routes";
import {filterAsyncRoutes,filterMenuList} from '../utils/handleRoutes'
import {menuList} from '@/config/menu'
export default createStore({
  state: {
    collapse: false,
    routes:[],
    menuList:[]
  },
   getters : {
    routes: (state) => state.routes,
    menuList:(state)=> state.menuList,
    collapse: (state) => state.collapse,
  },
  mutations: {
    setRoutes(state, routes) {
      state.routes = constantRoutes.concat(routes);
    },
    setMenuList:(state,menu)=>{
      
      state.menuList = menu
    },
    toggleCollapse: (state) => {
      state.collapse = !state.collapse;
      console.log(state.collapse)
    },
  },
  actions: {
    async setMenuList({commit},role){
      const finallyMenuList=await filterMenuList(
        [...menuList],
        role
      );

      commit("setMenuList", finallyMenuList);
      return finallyMenuList;
    },
    async setRoutes({ commit }, role) {
      //根据登录时接口返回的role筛选出具有权限的路由
      const finallyAsyncRoutes = await filterAsyncRoutes(
        [...asyncRoutes],
        role
      );
      
      commit("setRoutes", finallyAsyncRoutes);
      return finallyAsyncRoutes;
    },
    toggleCollapse({ commit }) {
      commit("toggleCollapse");
    },
  },
  modules: {
  }
})
