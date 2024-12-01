export async function departmentList(data: DepartmentApi.DepartmentListVo) {
  return $.utils.axios.http.post<DepartmentApi.DepartmentListVo, any>('/department/list', data).then(res => {
    return res
  })
}

export async function add(data: DepartmentApi.DepartmentAddVo) {
  return $.utils.axios.http.post<DepartmentApi.DepartmentAddVo, Request.Success>('/department/add', data).then(res => {
    return res
  })
}

export async function update(data: DepartmentApi.DepartmentUpdateVo) {
  return $.utils.axios.http.post<DepartmentApi.DepartmentUpdateVo, Request.Success>('/department/update', data).then(res => {
    return res
  })
}

export async function all() {
  return $.utils.axios.http.post<never, DepartmentApi.DepartmentAllResVo[]>('/department/all').then(res => {
    return res
  })
}