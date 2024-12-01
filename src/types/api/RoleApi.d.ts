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

  /**
   * RoleListVo
   */
  export interface RoleListVo {
    name?: string;
    page?: number;
    pageSize?: number;

    [property: string]: any;
  }


  /**
   * RoleListResVo
   */
  export interface RoleListResVo {
    children?: ChildElement[];
    createTime?: number;
    id?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;
    status?: string;
    type?: string;

    [property: string]: any;
  }

  /**
   * 角色列表返回值
   *
   * RoleListResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    createTime?: number;
    id?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;
    status?: string;
    type?: string;

    [property: string]: any;
  }

  /**
   * RoleAddVo
   */
  export interface RoleAddVo {
    isDelete?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;

    [property: string]: any;
  }

  /**
   * RoleUpdateVo
   */
  export interface RoleUpdateVo {
    id?: number;
    isDelete?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;

    [property: string]: any;
  }

  /**
   * RoleAllResVo
   */
  export interface RoleAllResVo {
    children?: ChildElement[];
    id?: number;
    name?: string;

    [property: string]: any;
  }

  /**
   * 全部角色树
   *
   * RoleAllResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    id?: number;
    name?: string;

    [property: string]: any;
  }

  /**
   * RoleDeleteVo
   */
  export interface RoleDeleteVo {
    id?: number;

    [property: string]: any;
  }

}