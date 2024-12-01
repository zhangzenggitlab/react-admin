declare namespace UserRoleApi {
  /**
   * GetRoleByUserIdResVo
   */
  export interface GetRoleByUserIDResVo {
    roleIds?: number[];

    [property: string]: any;
  }

  /**
   * GetRoleByUserId
   */
  export interface GetRoleByUserID {
    userId?: number;
    [property: string]: any;
  }

  /**
   * UserRoleUpdateVo
   */
  export interface UserRoleUpdateVo {
    roleIds: number[];
    userId?: number;
    [property: string]: any;
  }

}