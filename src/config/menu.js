export const menuList = [
    {
        title: "用户管理",
        name: "user",
        icon: "UserOutlined",
        permissions: ["superadmin"],
        children: [{
            title: "用户列表",
            name: 'user-list',
            permissions: ["superadmin"],
        }]
    },
    {
        title: "简历管理",
        name: "resume",
        icon: "SolutionOutlined",
        permissions: ["superadmin",'admin'],
        children: [{
            title: "简历列表",
            name: 'resume-list',
            permissions: ["superadmin","admin"],
        }]
    },
    {
        title: "面试安排管理",
        name: "interview",
        icon: "NodeIndexOutlined",
        permissions: ["superadmin",'admin'],
        children: [{
            title: "面试安排列表",
            name: 'interview-list',
            permissions: ["superadmin","admin"],
        }]
    }
]