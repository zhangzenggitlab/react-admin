import React from 'react'
import { RouteObject } from 'react-router-dom'

declare global {
  /**
   * 路由配置
   * 定义的路由自动作为home的子路由
   */
  type RouterConfig = RouterBase.RouterProps &
    Omit<RouteObject, 'element' | 'children'> & {
      children?: RouterConfig[]
    }

  interface BaseFc<B, P> extends React.FC<P> {
    /**
     * 在页面进入之前触发,用来加载页面前置数据
     * B => beforeEnter参数类型,如详情页需要传递id,之后查询详情,在异步函数调用结束之前不会显示组件(可用来做骨架屏或者loading)
     * P => 组件返回值，如详情页的详解接口查询完成，返回详情数据,可以直接通过props访
     */
    beforeEnter?: (...args: B[]) => Promise<P>
  }

  /**
   * 页面基类
   */
  interface BasePage {
    title?: string | React.ReactNode | JSX.Element
    className?: string
    style?: any
    children?: JSX.Element | string | React.ReactNode
    [key: string]: any
  }
}
