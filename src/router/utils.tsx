import Login from '@/pages/login/login.tsx'
import Home from '@/pages/home/home.tsx'
import AsyncImportComponent, { type AsyncImportComponentProps } from './async-import-component'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const routerModules: Record<string, RouterBase.PageRouter> = import.meta.glob('@/pages/**/router.ts', {
  eager: true,
})

const baseRouters: RouterConfig[] = [
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
function addRouter(routers: RouterConfig[]): RouterConfig[] {
  return (
    routers.map((item) => {
      if (typeof item.element === 'function') {
        baseRouters[1]?.children?.push({
          ...item,
          element: <AsyncImportComponent {...(item as unknown as AsyncImportComponentProps)}></AsyncImportComponent>,
          children:[]
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
