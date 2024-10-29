import { RouterProvider, RouterProviderProps } from 'react-router-dom'

type BaseRouterProps = RouterProviderProps

/**
 * 基础路由模式
 * @param props
 * @constructor
 */
const BaseRouter = (props:BaseRouterProps) => {

  return <RouterProvider router={props.router} fallbackElement={<>loading</>} {...props} />
}

export { BaseRouter };