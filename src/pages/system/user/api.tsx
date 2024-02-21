import request from "@/utils/request";

export const getUser = async (param: any) => {
  return request.post("/api/user/userList", param);
};

export const editUser = async (user: any) => {
  return request.post("/api/user/editUserById", user);
};

export const addUser = async (user: any) => {
  return request.post("/api/user/add", user);
};

export const delUser = async (data: any) => {
  return request.post("/api/user/deleteById", data);
};
