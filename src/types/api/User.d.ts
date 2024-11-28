declare namespace UserApi {

  interface UserListParams {
    page: number
    pageSize: number
    name: string
  }

  type UserListRes = PageListType<UserEntity.User>

  /**
   * UserLoginVo
   */
  export interface UserLoginVo {
    /**
     * 账号
     */
    account?: string;
    /**
     * 密码
     */
    password?: string;
  }

  export interface UserLoginRes {
    data: string
  }

}