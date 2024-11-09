declare namespace UserEntity {
  interface User {
    id: string | number
    name: string
    account: string
    phone: string
    mail: string
    /** 全部,启用,禁用 */
    status: '0' | '1' | '2'
    createTime: string | number
  }
}
