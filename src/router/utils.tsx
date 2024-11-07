import Login from '@/pages/login/login.tsx'
import Home from '@/pages/home/home.tsx'
import { AsyncImportComponent } from '@/lib/router/async-import-component/async-import-component'
import { AsyncImportComponentProps } from '@/lib'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const routerModules: Record<string, RouterBase.PageRouter> = import.meta.glob('@/pages/**/router.tsx', {
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
          children: [],
        })
      }

      if (item.path && item.drawer?.length > 0) {
        registerDrawer(item.path, item?.drawer || [], item.children || [])
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

/**
 * 注册抽屉路由
 */
function registerDrawer(parentPath: string, drawer: RouterBase.DrawerProps[], children: RouterConfig[]) {
  drawer.forEach(item => {
    const findChild = children.find(i => item.name == i.name)
    baseRouters.push({
      ...findChild,
      element: <AsyncImportComponent {...(findChild as unknown as AsyncImportComponentProps)}></AsyncImportComponent>,
      children: [],
      path: parentPath + '/preview' + findChild?.path,
    })
  })
}

export { routerModules, initRouters, baseRouters }
