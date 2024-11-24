declare namespace MenuApi {

  /**
   * 分页列表获取
   */
  interface MenuListParams {
    page: number
    pageSize: number
    name?: string
  }

  type MenuListRes = PageListType<MenuEntity.menu>

  interface MenuAllRes extends Pick<MenuEntity.menu, 'id' | 'parentId' | 'name'> {
    children?: MenuAllRes[]
  }
}