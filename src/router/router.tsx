import { useRoutes } from 'react-router-dom'

import { initRouters, baseRouters } from './utils'
import type { RouteObject } from 'react-router/dist/lib/context'

const GetRoutes = () => {
  return useRoutes(baseRouters as RouteObject[])
}

initRouters()

export { GetRoutes }
