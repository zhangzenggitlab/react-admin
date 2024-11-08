import { SettingOutlined } from '@ant-design/icons'

export const routers: RouterConfig[] = [
  {
    title: '系统管理',
    path: '/system',
    icon: <SettingOutlined />,
    redirect: '/system/menu',
    children: [
      {
        title: '菜单管理',
        path: '/system/menu',
        element: () => import('./system-menu/system-menu'),
      },
      {
        title: '用户管理',
        path: '/system/user',
        element: () => import('./system-user/system-user-list/system-user-list.tsx'),
        drawer: [{
          name: 'user-detail',
        }, {
          name: 'user-add',
        }],
        children: [{
          name: 'user-detail',
          title: '用户详情',
          path: '/system/user/detail/:id',
          element: () => import('./system-user/system-user-detail/system-user-detail.tsx'),
          meta: {
            slider: false,
          },
        }, {
          name: 'user-add',
          title: '用户新增',
          path: '/system/user/add',
          element: () => import('./system-user/system-user-add/system-user-add.tsx'),
          meta: {
            slider: false,
          },
        }],
      },
    ],
  },
]
