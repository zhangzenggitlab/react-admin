export async function getRoleByUserId(data: UserRoleApi.GetRoleByUserID) {
  return $.utils.axios.http.post<UserRoleApi.GetRoleByUserID, UserRoleApi.GetRoleByUserIDResVo>('/userRole/getRoleByUserId', data).then(res=>{
    return res.roleIds || []
  })
}

export async function update(data: UserRoleApi.UserRoleUpdateVo) {
  return $.utils.axios.http.post<UserRoleApi.UserRoleUpdateVo,Request.Success>('/userRole/update', data)
}