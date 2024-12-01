export async function roleList(data: RoleApi.RoleListVo) {
  return $.utils.axios.http.post<RoleApi.RoleListVo, Request.Page<RoleApi.RoleListResVo>>('/role/list', data)
}

export async function add(data: RoleApi.RoleAddVo) {
  return $.utils.axios.http.post<RoleApi.RoleAddVo, Request.Success>('/role/add', data)
}

export async function update(data: RoleApi.RoleUpdateVo) {
  return $.utils.axios.http.post<RoleApi.RoleUpdateVo, Request.Success>('/role/update', data)
}

export async function deleteRole(data: RoleApi.RoleDeleteVo) {
  return $.utils.axios.http.post<RoleApi.RoleDeleteVo, Request.Success>('/role/delete', data)
}

export async function all() {
  return $.utils.axios.http.post<never, RoleApi.RoleAllResVo[]>('/role/all').then(res => {
    return res || []
  })
}