import IDepartment from "@/interfaces/IDepartment";
import ISearch from "./interface";
import request from "@/utils/request";

export const getDepartment = async (params: ISearch) => {
    return request.get("/api/department/list", params)
}

export const editDepartment = async (data: IDepartment) => {
    return request.put("/api/department/updateDepartmentById", data)
}

export const addDepartment = async (department: IDepartment) => {
    return department;
}

export const allDepartment = async () => {
    return request.get("/api/department/all", null)
}

export const delDepartmentById = async (data: any) => {
    return request.delete("/api/department/delDepartmentById", data)
}