declare namespace UserEntity {
  interface User {
    id: string | number
    name: string
    account: string
    phone: string
    mail: string
    /** 启用,禁用 */
    status:  '1' | '2'
    createTime: string | number
    /** 所在部门名称 */
    departmentName: string
  }
}
