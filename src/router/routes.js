import Layout from "@/layouts";
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/pages/login/login"),
    hidden: true,
    meta: {
      title: '登录',
      requireAuth: false,
    }
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/pages/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          permissions: ['admin', 'superadmin']
        },
      },
    ],
  },
  {
    path: '/admin',
    name: "Admin",
    component: Layout,
    redirect: 'list',
    meta: {
      title: "用户管理",
      permissions: ["superAdmin"],
    },
    children: [{
      path: 'list',
      name: 'AdminList',
      component: () => import("@/pages/admin/index"),
      meta: {
        title: "用户管理列表",
        permissions: ["superAdmin"],
      }
    }
    ]
  },
  {
    path: '/resume',
    name: "Resume",
    component: Layout,
    redirect: 'list',
    meta: {
      title: "简历管理",
      permissions: ["admin", "superAdmin"],
    },
    children: [{
      path: 'list',
      name: 'AdminList',
      component: () => import("@/pages/resume/index"),
      meta: {
        title: "简历列表",
        permissions: ["admin", "superAdmin"],
      }
    }
    ]
  },
  {
    path: '/interview',
    name: "Interview",
    component: Layout,
    redirect: 'list',
    meta: {
      title: "面试安排管理",
      permissions: ["superAdmin","admin"],
    },
    children: [{
      path: 'list',
      name: 'InterviewList',
      component: () => import("@/pages/interview/index"),
      meta: {
        title: "面试安排列表",
        permissions: ["superAdmin","admin"],
      }
    }
    ]
  }
]
