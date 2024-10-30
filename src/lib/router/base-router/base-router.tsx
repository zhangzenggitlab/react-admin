import { RouterProviderProps, BrowserRouter } from 'react-router-dom'

import { GetRoutes } from '@/router/router.tsx'

export type BaseRouterProps = RouterProviderProps

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  )
}

export { BaseRouter }
