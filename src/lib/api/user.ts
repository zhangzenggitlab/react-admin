export async function userList(params: UserApi.UserListParams) {
  return $.utils.axios.http.post<UserApi.UserListParams, Request.Page<UserApi.UserListResVo>>('/user/list', params).then(res => {
    return res
  })
}

export async function login(data: UserApi.UserLoginVo) {
  return $.utils.axios.http.post<UserApi.UserLoginVo, UserApi.UserLoginResVo>('/user/login', data).then(res => {
    return res.token|| ''
  })
}

export async function add(data:UserApi.ReqUserAdd){
  return $.utils.axios.http.post<UserApi.ReqUserAdd, Request.Success>('/user/add', data).then(res => {
    return res
  })
}

export async function deleteUser(data:UserApi.UserDeleteVo){
  return $.utils.axios.http.post<UserApi.UserDeleteVo, Request.Success>('/user/delete', data).then(res => {
    return res
  })
}

export async function update(data:UserApi.UserUpdateVo){
  return $.utils.axios.http.post<UserApi.UserUpdateVo, Request.Success>('/user/update', data).then(res => {
    return res
  })
}

