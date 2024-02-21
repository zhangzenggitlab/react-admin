export const login = async (account: string, password: string): Promise<any> => {
    if (account == "1" && password == "1") {
        return {
            code: 200,
            data: "token**",
            msg: "",
        }
    }

    return {
        code: 400,
        data: "",
        msg: "账号或密码错误",

    }
}

export const logout = async (): Promise<any> => {

}

export const getRouter = async (): Promise<any> => {
    return {
        code: 200,
        data: [
            {
                key: '/workplace',
                icon: "HistoryOutlined",
                label: '工作台',
                menu: '/workplace',
                type: 2,
            },
            {
                key: '/system',
                icon: "SettingOutlined",
                label: '系统管理',
                menu: "/system",
                type: 1,
                children: [{
                    key: '/system/user',
                    label: '用户列表',
                    menu: "/system",
                    type: 2,
                }, {
                    key: '/system/menu',
                    label: '菜单列表',
                    menu: "/system",
                    type: 2,
                }, {
                    key: '/system/role',
                    label: '角色列表',
                    menu: "/system",
                    type: 2,
                }, {
                    key: '/system/department',
                    label: '部门列表',
                    menu: "/system",
                    type: 2,
                },]
            },
            {
                key: "/personal",
                icon: "UserOutlined",
                label: '个人页',
                menu: '/personal',
                type: 1,
                children: [{
                    key: '/personal/setting',
                    label: '个人设置',
                    menu: "/personal",
                    type: 2,
                }]
            }
        ]
    }
}

export const getUserInfo = (): Promise<any> => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: {
                account: "101",
                mail: "103@qq.com",
                phone: "108***0959",
                name: "React admin",
                roles: ["普通用户"],
                department: "前端",
                avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            }
        })
    })

}

export const updateUserInfo = (userInfo: any): Promise<any> => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: userInfo
        })
    })

}