import { useRoutes } from 'react-router-dom'

/** 动态加载文件夹下router.ts 命名的路由文件*/
const RouterModules = import.meta.glob('@/pages/**/router.ts', {
  eager: true,
})

import Home from '@/pages/home/home'
import Login from '@/pages/login/login'

const baseRouters = [
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

const GetRoutes = () => {
  return useRoutes(baseRouters)
}

console.log(Login.aa())
export { GetRoutes,RouterModules }
