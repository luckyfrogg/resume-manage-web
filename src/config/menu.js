export const menuList = [
    {
        title: "用户管理",
        name: "Admin",
        icon: "re-account",
        permissions: ["superadmin"],
        children: [{
            title: "用户列表",
            name: 'AdminList',
            path:'',
            permissions: ["superadmin"],
        }]
    },
    {
        title: "简历管理",
        name: "Resume",
        icon: "re-image-text",
        permissions: ["superadmin",'admin'],
        children: [{
            title: "简历列表",
            name: 'ResumeList',
            permissions: ["superadmin","admin"],
        }]
    },
    {
        title: "面试安排管理",
        name: "Interview",
        icon: "re-manage-order",
        permissions: ["superadmin",'admin'],
        children: [{
            title: "面试安排列表",
            name: 'InterviewList',
            permissions: ["superadmin","admin"],
        }]
    }
]