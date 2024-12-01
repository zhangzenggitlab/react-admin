export async function menuList(data: MenuApi.MenuListParams) {
  return $.utils.axios.http.post<MenuApi.MenuListParams, Request.Page<MenuApi.MenuListResVo>>('/menu/list', data).then(res => {
    return res
  })
}

export async function menuAll() {
  return $.utils.axios.http.post<never, MenuApi.MenuAllResVo[]>('/menu/all').then(res => {
    return res || []
  })
}

export async function menuAdd(data:MenuApi.MenuAddVo) {
  return $.utils.axios.http.post<MenuApi.MenuAddVo, Request.Success>('/menu/add',data).then(res => {
    return res || []
  })
}

export async function update(data:MenuApi.MenuUpdateVo) {
  return $.utils.axios.http.post<MenuApi.MenuUpdateVo, Request.Success>('/menu/update',data).then(res => {
    return res || []
  })
}

export async function deleteMenu(data:MenuApi.MenuDeleteVo) {
  return $.utils.axios.http.post<MenuApi.MenuDeleteVo, Request.Success>('/menu/delete',data)
}