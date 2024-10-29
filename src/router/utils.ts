import Login from '@/pages/login/login.tsx'
import Home from '@/pages/home/home.tsx'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const routerModules = import.meta.glob('@/pages/**/router.ts', {
  eager: true,
})

const baseRouters:RouterProps[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
]

function initRouters(){
  const routers:RouterProps[] = Object.values(routerModules)

  for (const router of routers) {
    // {
    // ...routers,
    //   Component:router.routers[0].element
    // }
    console.log(router.routers[0].element)
  }
}


export {routerModules,initRouters,baseRouters}

