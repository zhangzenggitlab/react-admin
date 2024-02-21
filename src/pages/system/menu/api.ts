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
<<<<<<< HEAD
                    type:1,
=======
                    type: "1",
>>>>>>> fbe1d6275972365c94fb0aa669deca84ad170a6a
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
<<<<<<< HEAD
                        type: 2,
                        status:2,
=======
                        type: "2",
                        status: 2,
>>>>>>> fbe1d6275972365c94fb0aa669deca84ad170a6a
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
