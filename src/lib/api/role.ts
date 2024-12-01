export function roleList(params: RoleApi.RoleListParams): Promise<Request.Page<RoleEntity.role>> {
  console.log(params)
  return new Promise((resolve => {
    resolve({
      total: 2,
      pageSize: 1,
      page: 1,
      data: [{
        id: 1,
        name: '超級管理員',
        permission: 'admin',
        sort: '1',
        remark: '拥有系统全部权限',
        parentId: 0,
        createTime: '123456767',
        updateTime: '123456767',
      }, {
        id: 2,
        name: '菜单管理员',
        permission: 'menu',
        sort: '1', remark: '',
        parentId: 0,
        createTime: '123456767',
        updateTime: '123456767',
      }, {
        id: 3,
        name: '用户管理员',
        permission: 'role',
        sort: '1', remark: '',
        parentId: 0,
        createTime: '123456767',
        updateTime: '123456767',
      }],
    })
  }))
}

export function roleAll(): Promise<RoleApi.RoleAllRes[]> {
  return new Promise((resolve => {
    resolve([{
      id: 1,
      name: '超級管理員',
    }, {
      id: 2,
      name: '菜单管理员',
    }, {
      id: 3,
      name: '用户管理员',
    }])
  }))

}