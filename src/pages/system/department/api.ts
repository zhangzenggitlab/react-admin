import IDepartment from "@/interfaces/IDepartment";
import ISearch from "./interface";

export const getDepartment = async (param:ISearch)=> {
    console.log(param);
    return {
        code: 200,
        data: {
            list: [
                {
                    id: 1,
                    name: "采购部",
                    status: 2,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    email: "103@qq.com",
                    principal: "张三",
                },
                {
                    id: 2,
                    name: "技术部",
                    status:1,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    principal: "李四",
                    email: "103@qq.com",
                    children: [{
                        id: 3,
                        name: "前端",
                        status: 1,
                        createTime: "2023-01-01",
                        parentId: 2,
                        email: "103@qq.com",
                        phone: "1808**0959",
                        principal: "王五",
                    }, {
                        id: 4,
                        name: "后端",
                        status: 1,
                        createTime: "2023-01-01",
                        parentId: 2,
                        phone: "1808**0959",
                        principal: "赵六",
                        email: "103@qq.com",
                    }]
                },
                {
                    id: 5,
                    name: "销售部",
                    status:1,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    principal: "李四2",
                    email: "103@qq.com",
                    children: [
                        {
                            id: 6,
                            name: "销售部1",
                            status:1,
                            createTime: "2023-01-01",
                            parentId: 5,
                            phone: "1808**0959",
                            principal: "李四3",
                            email: "103@qq.com",
                        },
                        {
                            id: 7,
                            name: "销售部2",
                            status: 1,
                            createTime: "2023-01-01",
                            parentId: 5,
                            phone: "1808**0959",
                            principal: "李四3",
                            email: "103@qq.com",
                        }
                    ]
                }
            ],
            total: 10
        },
    };
}

export const editDepartment = async (department: IDepartment) => {

    return department;
}

export const addDepartment = async (department: IDepartment) => {

    return department;
}


 export const allDepartment = async ()=>{
    return {
        code: 200,
        data: {
            list: [
                {
                    id: 1,
                    name: "采购部",
                    status: 2,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    email: "103@qq.com",
                    principal: "张三",
                },
                {
                    id: 2,
                    name: "技术部",
                    status:1,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    principal: "李四",
                    email: "103@qq.com",
                    children: [{
                        id: 3,
                        name: "前端",
                        status: 1,
                        createTime: "2023-01-01",
                        parentId: 2,
                        email: "103@qq.com",
                        phone: "1808**0959",
                        principal: "王五",
                    }, {
                        id: 4,
                        name: "后端",
                        status: 1,
                        createTime: "2023-01-01",
                        parentId: 2,
                        phone: "1808**0959",
                        principal: "赵六",
                        email: "103@qq.com",
                    }]
                },
                {
                    id: 5,
                    name: "销售部",
                    status:1,
                    createTime: "2023-01-01",
                    parentId: 0,
                    phone: "1808**0959",
                    principal: "李四2",
                    email: "103@qq.com",
                    children: [
                        {
                            id: 6,
                            name: "销售部1",
                            status:1,
                            createTime: "2023-01-01",
                            parentId: 5,
                            phone: "1808**0959",
                            principal: "李四3",
                            email: "103@qq.com",
                        },
                        {
                            id: 7,
                            name: "销售部2",
                            status: 1,
                            createTime: "2023-01-01",
                            parentId: 5,
                            phone: "1808**0959",
                            principal: "李四3",
                            email: "103@qq.com",
                        }
                    ]
                }
            ],
            total: 10
        },
    };
 }