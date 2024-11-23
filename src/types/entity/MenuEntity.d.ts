declare namespace MenuEntity {
  interface menu {
    id: string | number
    /** 名称 */
    name: string
    /** 类型，1：菜单，2：按钮 */
    type: '1' | '2'
    /** 排序 */
    sort: string
    /** 权限标识 */
    permission: string
    /** 状态；1启用,2：禁用 */
    status: '1' | '2'
    /** 父菜单id */
    parentId:number
    /** 创建时间 */
    createTime: string | number
    /** 更新时间 */
    updateTime: string | number
  }
}
