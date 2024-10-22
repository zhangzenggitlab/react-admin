import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/pages/home/home'

type RouterProps = RouteObject & {
  name?: string
  title?: string
}

function Router() {
  const elements: RouterProps[] = useRoutes([
    {
      path: '/home',
      element: () => import('../pages/home/home'),
    },
  ])

  return elements
}

export { Router }
