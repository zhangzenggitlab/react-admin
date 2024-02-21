import IRole from "./interface";

export const getRole = async (params: any) => {
    console.log(params);
    return {
        code: 200,
        data: {
            list: [
                {
                    id: 1,
                    name: "超级管理员",
                    permission: "superAdmin",
                    status: 2,
                    description: "管理所有权限",
                    menu: [2, 3, 4],
                    parentId:0,
                    children: [{
                        id: 3,
                        name: "普通用户",
                        permission: "general",
                        status: 1,
                        description: "普通权限",
                        menu: [3],  parentId:1,
                    }]
                },
                {
                    id: 2,
                    name: "普通用户",
                    permission: "general",
                    status: 1,
                    description: "普通权限",
                    menu: [3],  parentId:0,
                    children: [{
                        id: 4,
                        name: "普通用户",
                        permission: "general",
                        status: 1,
                        description: "普通权限",
                        menu: [3],  parentId:2,
                    }]
                },
            ],
            total: 10
        },
    };
}

export const editRole = async (role: IRole) => {

    return role;
}

export const allRole = async () => {
    return {
        code: 200,
        data: {
            list: [
                {
                    id: 1,
                    name: "超级管理员",
                    permission: "superAdmin",
                    status: 2,
                    description: "管理所有权限",
                    menu: [2, 3, 4], children: [{
                        id: 3,
                        name: "普通用户",
                        permission: "general",
                        status: 1,
                        description: "普通权限",
                        menu: [3]
                    }]
                },
                {
                    id: 2,
                    name: "普通用户",
                    permission: "general",
                    status: 1,
                    description: "普通权限",
                    menu: [3]
                },
            ],
            total: 10
        },
    };
} 