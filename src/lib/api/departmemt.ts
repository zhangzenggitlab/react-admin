export async function departmentList(data: DepartmentApi.DepartmentListVo): Promise<Request.Page<DepartmentApi.DepartmentListRes>> {
  return $.utils.axios.http.post<DepartmentApi.DepartmentListVo,any>('/department/list', data).then(res => {
    return res
  })
}

export function departmentAll(): Promise<DepartmentApi.DepartmentAllRes[]> {
  return new Promise((resolve => {
    resolve([{
      id: 1,
      name: '开发部',
      parentId: 0,
      children: [{
        id: 4,
        name: '前端',
        parentId: 1,
      }, {
        id: 5,
        name: '后端', parentId: 1,
      }],
    }, {
      id: 2,
      name: '后勤部', parentId: 0,
      children: [{
        id: 3,
        name: '后厨部门',
        parentId: 2,
      }],
    }])
  }))

}