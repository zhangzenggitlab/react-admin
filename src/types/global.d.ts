import React from 'react'
import { RouteObject } from 'react-router-dom'

declare global {
  type RouterConfig = Router.RouterProps &
    Omit<RouteObject, 'element' | 'children'> & {
      children?: RouterConfig[]
    }

  interface PageFc extends React.FC {
    aa: any
  }
}
