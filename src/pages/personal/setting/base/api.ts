import IResponse from "@/interfaces/common";
export const updateUserInfo = async (password: any): Promise<IResponse> => {
    return {
        code: 200,
        data: password,
        msg: ""
    };
}