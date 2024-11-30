import Login from '@/pages/login/login.tsx'
import Home from '@/pages/common/home/home.tsx'
import Error from '@/pages/common/error/error.tsx'
import NotFound from '@/pages/common/not-found/not-found.tsx'
import { AsyncImportComponent } from '@/lib/router/async-import-component/async-import-component.tsx'
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
    children: [{
      path: '/error',
      element: <Error />,
      children: [],
    },
      {
        path: '/not-found',
        element: <NotFound />,
        children: [],
      }],
  },

  {
    path: '*',
    element: <NotFound />,
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
        const router = {
          ...item,
          element: <AsyncImportComponent {...(item as unknown as AsyncImportComponentProps)}></AsyncImportComponent>,
          children: [],
        }
        baseRouters[1]?.children?.push(router)

        if (router.path && router?.drawer && router?.drawer?.length > 0) {
          registerDrawer(router, router?.drawer || [], item.children || [])
        }
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
function registerDrawer(parent: RouterConfig, drawer: RouterBase.DrawerProps[], children: RouterConfig[]) {
  drawer.forEach(item => {
    const findChild = children.find(i => item.name == i.name)

    if (!parent.children) {
      parent.children = []
    }

    parent?.children?.push({
      ...findChild,
      element: <AsyncImportComponent {...(findChild as unknown as AsyncImportComponentProps)}></AsyncImportComponent>,
      path: parent.path + '/preview' + findChild?.path,
    })

  })
}

export { routerModules, initRouters, baseRouters }
