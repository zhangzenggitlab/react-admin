export function departmentList(params: RoleApi.RoleListParams): Promise<Request.PageType<DepartmentApi.DepartmentListRes>> {
  console.log(params)
  return new Promise((resolve => {
    resolve({
      total: 1,
      pageSize: 1,
      page: 1,
      data: [{
        id: 1,
        name: '开发部',
        sort: '1',
        parentId: 0,
        createTime: '123456767',
        updateTime: '123456767',
        children: [{
          id: 4,
          name: '前端',
          sort: '1',
          parentId: 1,
          createTime: '123456767',
          updateTime: '123456767',
        }, {
          id: 5,
          name: '后端',
          sort: '1',
          parentId: 1,
          createTime: '123456767',
          updateTime: '123456767',
        }],
      }, {
        id: 2,
        name: '后勤部',
        sort: '1',
        parentId: 0,
        createTime: '123456767',
        updateTime: '123456767',
        children: [{
          id: 3,
          name: '后厨部门',
          sort: '1',
          parentId: 2,
          createTime: '123456767',
          updateTime: '123456767',
        }],
      }],
    })
  }))
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