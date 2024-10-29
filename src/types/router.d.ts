import { type RouteObject } from 'react-router-dom'
import React from 'react'

declare global {
  /** 定义路由 */
  export type RouterProps = Omit<RouteObject> & {
    name?: string
    title?: string
    path?: string
    element?: () => React.ReactNode | Promise<unknown> | null
    children?:RouterProps[]
  }
}
