import request from "@/utils/request";

export const getMenuTree = async () => {
    return request.get("/api/menu/all", null);
} 