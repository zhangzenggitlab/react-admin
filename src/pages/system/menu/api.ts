export const getMenu = () => {
    return {
        code: 200,
        data: {
            list: [
                {
                    id: 1,
                    key: "system",
                    label: "系统管理",
                    icon: "***",
                    sort: 1,
                    permission: "menu:*",
                    type:1,
                    status: 1,
                    menu: "system",
                    createTime: 1534837621348,
                    parentId: 0,
                    children: [{
                        id: 2,
                        key: "system/user",
                        label: "用户列表",
                        icon: "***",
                        sort: 1,
                        permission: "menu:user:list",
                        type: 2,
                        status:2,
                        menu: "system",
                        createTime: 1534837621348,
                        parentId: 1
                    }]
                },
            ],
            total: 10
        },
    };
};

export const editMenu = async (menu: any) => {
    return menu;
}
