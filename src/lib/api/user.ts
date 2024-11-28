export async function userList(params: UserApi.UserListParams) {
  return $.utils.axios.http.post<UserApi.UserListParams,Request.PageType<UserEntity.User>>('/user/list', params).then(res => {
    return res
  })
}

export async function login(data: UserApi.UserLoginVo) {
  return $.utils.axios.http.post<UserApi.UserLoginVo, UserApi.UserLoginRes>('/user/login', data).then(res => {
    return res.data
  })
}