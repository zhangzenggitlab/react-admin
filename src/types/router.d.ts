import { type RouteObject } from 'react-router-dom'
import React from 'react'

declare global {
  /** 定义路由 */
  export type RouterProps = Omit<RouteObject, 'element'> & {
    name?: string
    title?: string
    element?: () => React.ReactNode | Promise<any>
  }
}
