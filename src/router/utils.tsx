import { MenuProps } from 'antd'
import Login from '@/pages/login/login.tsx'
import Home from '@/pages/home/home.tsx'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const routerModules: Record<string, Router.RouterProps> = import.meta.glob('@/pages/**/router.ts', {
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
  },
]

function initRouters() {
  const routers: Router.RouterProps[] = Object.values(routerModules)

  for (const router of routers) {
    addRouter(router.routers)
  }
}

/**
 * 动态增加路由
 * @param router 路由对象
 */
function addRouter(routers: Router.RouterProps[]): MenuProps[] {
  const router = routers.map((item) => {
    return {
      key: item.path,
      label: item.title,
    }
  })

  return router
  // console.log({
  //   ...routers,
  //   Component: router.routers[0].element,
  // })
}

export { routerModules, initRouters, baseRouters }
