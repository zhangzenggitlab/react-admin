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

}