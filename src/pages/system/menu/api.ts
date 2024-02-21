import request from "@/utils/request";

export const getMenu = (param: any) => {
    return request.get("/api/menu/list", param);
};

export const editMenu = async (data: any) => {
    return request.put("/api/menu/updateMenuById", data);
}

export const addMenu = async (data: any) => {
    return request.post("/api/menu/add", data);
}

export const delMenu = async (data: any) => {
    console.log(data);
    return request.post("/api/menu/menuById", data);
}
