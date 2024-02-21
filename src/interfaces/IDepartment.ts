interface IDepartment {
    id: number
    name: string;                       // 名称
    status: string;                     // 状态
    parentId: number;
    children: Array<IDepartment>
    createTime: string,
    phone: string,
    email: string,
    principal: string,
}

export default IDepartment;