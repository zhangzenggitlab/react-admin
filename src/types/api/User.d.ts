declare namespace UserApi {

  interface UserListParams {
    page: number
    pageSize: number
    name?: string
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

  /**
   * UserLoginResVo
   */
  export interface UserLoginResVo {
    token?: string;
    [property: string]: any;
  }

  /**
   * ReqUserAdd
   */
  export interface ReqUserAdd {
    account?: string;
    /**
     * 部门id
     */
    departmentId?: number;
    mail?: string;
    name?: string;
    password?: string;
    phone?: string;
    /**
     * 1正常 2 禁用
     */
    status?: '1' | '2';
  }

  /**
   * UserDeleteVo
   */
  export interface UserDeleteVo {
    id: number;

    [property: string]: any;
  }

  /**
   * UserListResVo
   */
  export interface UserListResVo {
    account?: string;
    createTime?: string;
    id: number;
    mail?: string;
    name?: string;
    phone?: string;
    status?: '1'|'2';
    [property: string]: any;
  }


  /**
   * UserUpdateVo
   */
  export interface UserUpdateVo {
    id?: number;
    mail?: string;
    name?: string;
    phone?: string;
    status?: '1' | '2';

    [property: string]: any;
  }

}