import Layout from "@/layouts";
export const constantRoutes = [
    {
      path: "/login",
      component: () => import("@/pages/login/login"),
      hidden: true,
      meta:{
          title:'登录',
          requireAuth:false,
      }
    },
  ]
  export const asyncRoutes = [
    {
      path: '/',
      component: Layout,
      redirect: "index",
      children: [
        {
          path: "index",
          name: "Index",
          component: () => import("@/pages/index/index"),
          meta: {
            title: "首页",
            icon: "home",
            affix: true,
            requireAuth:true
          },
        },
      ],
    },
    {
        path:'/adminManagement',
        name: "AdminManagement",
        component:Layout,
        redirect:'list',
        meta:{
            title:"用户管理",
            permissions: ["superAdmin"] ,
            requireAuth:true
        },
        children:[{
            path:'list',
            name:'AdminList',
            component:() => import("@/pages/adminManagement/index"),
            meta:{
                title:"用户管理列表",
                permissions: ["superAdmin"] ,
                requireAuth:true
            }
        }
        ]
    }
  ]
  