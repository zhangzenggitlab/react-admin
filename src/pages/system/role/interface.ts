interface IRole {
    id: number
    name: string;                       // 角色名称
    permission: string;                 // 角色权限
    description: string;                // 角色描述
    status: number;                     // 是否默认；1 是 2 否
    menu: any[];
    parentId: number;
}

export default IRole;