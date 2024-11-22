export function menuList(params:MenuApi.MenuListParams): Promise<Request.PageType<MenuEntity.menu>> {
  console.log(params)
  return new Promise((resolve => {
    resolve({
      total: 2,
      pageSize: 1,
      page: 1,
      data: [{
        id: 1,
        name: '用戶管理',
        permission: 'user',
        type: '1',
        status: '1',
        sort: '1',
        createTime: '123456767',
        updateTime: '123456767',
      }, {
        id: 2,
        name: '菜单管理',
        permission: 'menu',
        type: '1',
        status: '1',
        sort: '1',
        createTime: '123456767',
        updateTime: '123456767',
      }],
    })
  }))

}