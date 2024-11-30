/**
 * http请求ts类型
 */
declare namespace Request {
  /**
   * 所有接口返回基类
   */
  export interface Response<T> {
    msg: string,
    /** */
    code: 200 | 401 | 500
    data: T
  }

  /**
   * 分页
   * 列表接口一般会继承当前类
   */
  interface PageType<T> {
    page: number,
    pageSize: number
    total: number
    data: T[]
  }

  /**
   * 成功通用返回类型
   */
  export interface ResponseSuccess {
    msg: string,
    code: 200
    data: null
  }
}
