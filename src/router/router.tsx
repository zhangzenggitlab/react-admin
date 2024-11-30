 import { useRoutes, RouteObject } from 'react-router-dom'

import { initRouters, baseRouters } from '../lib/router/utils.tsx'

 export const GetRoutes = () => {
  return useRoutes(baseRouters as RouteObject[])
}

 initRouters()

