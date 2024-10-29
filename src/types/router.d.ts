declare namespace Router {
  export interface RouterPropsMeta {
    /** 权限码,页面权限 */
    permissionCode?: string | number
    /** 是否显示在左侧菜单 */
    slider?: boolean
  }

  /** 菜单路由 */
  export type RouterProps = {
    name?: string
    title?: string
    path: string
    children?: RouterProps[]
    meta?: RouterPropsMeta
    element?: () => React.ReactNode | Promise<unknown> | null
  }
}
