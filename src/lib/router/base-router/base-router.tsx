import { RouterProvider, RouterProviderProps } from 'react-router-dom'

interface BaseRouterProps extends RouterProviderProps {
  beforeEnter?: <T>() => Promise<Awaited<T>>;
}

const BaseRouter = (props: BaseRouterProps) => {

  return <RouterProvider router={props.router} />
}

export { BaseRouter }