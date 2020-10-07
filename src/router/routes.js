import Layout from "@/layouts";
import SubLayout from '@/layouts/subLayout.vue'
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/pages/login/login"),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
]
export const asyncRoutes = [
  {
    path: '/',
    redirect: '/resume',
    component: Layout,
    children: [

    ],
  },
  {
    path: '/admin',
    name: "Admin",
    component: Layout,
    redirect: { name: 'AdminList' },
    meta: {
      title: "用户管理",
      permissions: ["superadmin"],
    },
    children: [{
      path: 'list',
      name: 'AdminList',
      // component: Layout,
      component: () => import("@/pages/admin/index"),
      meta: {
        title: "用户列表",
        permissions: ["superadmin"],
      }
    }
    ]
  },
  {
    path: '/resume',
    name: "Resume",
    component: Layout,
    redirect: { name: 'ResumeList' },
    meta: {
      title: "简历管理",
      permissions: ["admin", "superadmin"],
    },
    children: [{
      path: 'list',
      name: 'ResumeList',
      component: () => import("@/pages/resume/index"),
      meta: {
        title: "简历列表",
        permissions: ["admin", "superadmin"],
      }
    }
    ]
  },
  {
    path: '/interview',
    name: "Interview",
    component: Layout,
    redirect: { name: 'InterviewList' },
    meta: {
      title: "面试安排管理",
      permissions: ["superadmin", "admin"],
    },
    children: [{
      path: 'list',
      name: 'InterviewList',
      component: () => import("@/pages/interview/index"),
      meta: {
        title: "面试安排列表",
        permissions: ["superadmin", "admin"],
      }
    }
    ]
  }

]
