import request from "@/utils/request";

export const updateUserInfo = async (data: any) => {
    return request.post("/api/user/editUser", data);
}