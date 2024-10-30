import { lazy } from 'react'

import Login from '@/pages/login/login.tsx'
import Home from '@/pages/home/home.tsx'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const routerModules: Record<string, Router.PageRouter> = import.meta.glob('@/pages/**/router.ts', {
  eager: true,
})

const baseRouters: Router.RouterProps[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    children: [],
  },
]

function initRouters() {
  const routers = Object.values(routerModules)

  for (const router of routers) {
    addRouter(router.routers)
  }
}

/**
 * 动态增加路由
 * @param routers
 */
function addRouter(routers: Router.RouterProps[]): Router.RouterProps[] {
  return (
    routers.map((item) => {
      if (typeof item.element === 'function') {
        baseRouters[1]?.children?.push({
          Component: lazy(item.element as any),
          ...item,
        })
      }

      return {
        key: item.path,
        path: item.path,
        label: item.title,
        children: item.children ? addRouter(item.children) : [],
      }
    }) || []
  )
}

export { routerModules, initRouters, baseRouters }
