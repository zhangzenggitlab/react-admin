declare namespace RoleApi {

  /**
   * 分页列表获取
   */
  interface RoleListParams {
    page: number
    pageSize: number
    name?: string
  }

  type RoleListRes = PageListType<RoleEntity.role>

  interface RoleAllRes extends Pick<RoleEntity.role, 'id' | 'name'> {
    children?: RoleAllRes[]
  }
}