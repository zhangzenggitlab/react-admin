interface IUser {
    id?: number;
    key?: string;
    avatar?: string;
    account?: string;
    name?: string;
    mail?: string;
    phone?: string;
    roles?: Array<string>;                      // 角色id
    status: number;
    createTime?: string;
    department?: string
}


export type ISearch = Partial<Pick<IUser, "name" | "mail" | "phone" | "status" | "account" | "createTime"> & { page: number, pageSize: number }>;

export default IUser;