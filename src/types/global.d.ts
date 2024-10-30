import React from 'react'
import { RouteObject } from 'react-router-dom'

declare global {
  type RouterConfig = RouterBase.RouterProps &
    Omit<RouteObject, 'element' | 'children'> & {
      children?: RouterConfig[]
    }

  interface PageFc extends React.FC {}

  /** 页面props */
  export interface PageProps<P, B> extends React.FC<P> {
    /** 路由页面进入触发，用来加载初始化数据 */
    beforeEnter?: (...args: B) => Promise<P>
  }
}
