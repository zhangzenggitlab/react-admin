declare namespace UserEntity {
  interface User {
    id: string | number
    /** 姓名 */
    name: string
    /** 账号 */
    account: string
    /** 手机号 */
    phone: string
    /** 邮箱 */
    mail: string
    /** 启用,禁用 */
    status: '1' | '2'
    /** 创建时间 */
    createTime: string | number
    /** 所在部门名称 */
    departmentName: string
  }
}
