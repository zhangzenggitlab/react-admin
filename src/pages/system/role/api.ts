import IRole from "./interface";
import request from "@/utils/request";

export const getRole = async (params: any) => {
    return request.get("/api/role/list", params);
}

export const editRole = async (data: IRole) => {
    return request.put("/api/role/updateRoleById", data);
}

export const allRole = async () => {
    return request.get("/api/role/allTree", null);
}

export const addRole = async (data: IRole) => {
    return request.post("/api/role/add", data);
}

export const delRoleById = async (data: Pick<IRole, "id">) => {
    return request.delete("/api/role/delRoleById", data);
}

export const menuRoleByRoleId = async (params: any) => {
    return request.get("/api/menuRole/menuRoleByRoleId", params);
}

export const addMenuRole = async (data: any) => {
    return request.post("/api/menuRole/add", data);
}