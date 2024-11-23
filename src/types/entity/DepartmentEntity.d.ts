declare namespace DepartmentEntity {
  interface department {
    id: string | number
    /** 名称 */
    name: string
    /** 排序 */
    sort: string
    /** 父菜单id */
    parentId: number | string
    /** 备注 */
    remark: string
    /** 创建时间 */
    createTime: string | number
    /** 更新时间 */
    updateTime: string | number
  }
}
