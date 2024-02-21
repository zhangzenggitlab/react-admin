import request from "@/utils/request";

export const updatePassword = async (oldPassword: string, newPassword: string) => {
    return request.put("/api/user/updatePassword", { oldPassword, newPassword });
}