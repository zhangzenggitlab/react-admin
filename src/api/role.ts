import request from "@/utils/request";

export const roleAdd = async () => {
    return request.get("/api/role/add", null);
} 

