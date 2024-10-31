 import { useRoutes, RouteObject } from 'react-router-dom'

import { initRouters, baseRouters } from './utils'

const GetRoutes = () => {
  return useRoutes(baseRouters as RouteObject[])
}

initRouters()

export { GetRoutes }
