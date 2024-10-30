declare namespace RouterBase {
  /** 页面模块路由名称*/
  interface PageRouter {
    routers: RouterProps[]
  }

  /** 菜单路由 */
  export type RouterProps = {
    name?: string
    title?: string
    path: string
    meta?: RouterPropsMeta
    element?: (() => React.ReactNode | Promise<unknown> | null) | React.ReactNode
  }

  export interface RouterPropsMeta {
    /** 权限码,页面权限 */
    permissionCode?: string | number
    /** 是否显示在左侧菜单 */
    slider?: boolean
  }
}
