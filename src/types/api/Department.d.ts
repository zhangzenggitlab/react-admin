declare namespace DepartmentApi {
  /**
   * 分页列表查询参数
   */
  interface DepartmentListParams {
    page: number
    pageSize: number
    name?: string
  }

  // 分页接口返回类型
  type DepartmentListRes = DepartmentEntity.department & {
    children?: DepartmentListRes[]
  }

  // 获取全部部门返回类型
  interface DepartmentAllRes extends Pick<DepartmentEntity.department, 'id' | 'name' | 'parentId'> {
    children?: DepartmentAllRes[]
  }

  /**
   * DepartmentListVo
   */
  export interface DepartmentListVo {
    name?: string;
    page?: number;
    pageSize?: number;
    [property: string]: any;
  }

  /**
   * DepartmentListResVo
   */
  export interface DepartmentListResVo {
    children?: ChildElement[];
    createTime?: number;
    id?: number;
    name?: string;
    parentId?: number;
    remark?: string;
    sort?: number;
    [property: string]: any;
  }

  /**
   * 部门列表返回
   *
   * DepartmentListResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    createTime?: number;
    id?: number;
    name?: string;
    parentId?: number;
    remark?: string;
    sort?: number;
    [property: string]: any;
  }

  /**
   * DepartmentAddVo
   */
  export interface DepartmentAddVo {
    name?: string;
    parentId?: number;
    remark?: string;
    sort?: number;
    [property: string]: any;
  }

  /**
   * DepartmentUpdateVo
   */
  export interface DepartmentUpdateVo {
    id?: number;
    name?: string;
    parentId?: number;
    remark?: string;
    sort?: number;
    [property: string]: any;
  }

  /**
   * DepartmentAllResVo
   */
  export interface DepartmentAllResVo {
    children?: ChildElement[];
    id?: number;
    name?: string;
    [property: string]: any;
  }

  /**
   * 所有部门树结构
   *
   * DepartmentAllResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    id?: number;
    name?: string;
    [property: string]: any;
  }
}