import request from "@/utils/request";

export const login = async (data: any): Promise<any> => {
    return request.post("/api/user/login", data);
}

export const logout = async (): Promise<any> => {
    return request.post("/api/user/logout", null);
}

export const getRouter = async (): Promise<any> => {
    return request.get("/api/menu/menuRouter", null);

}

export const getUserInfo = (): Promise<any> => {
    return request.get("/api/user/getUserInfo", null);
}

export const updateUserInfo = (userInfo: any): Promise<any> => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: userInfo
        })
    })

}