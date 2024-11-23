import { SettingOutlined } from '@ant-design/icons'

export const routers: RouterConfig[] = [
  {
    title: '系统管理',
    path: '/system',
    icon: <SettingOutlined />,
    redirect: '/system/menu',
    children: [
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
          name: 'user-add',
          title: '用户新增',
          path: '/system/user/add',
          element: () => import('./system-user/modal/system-user-add.tsx'),
          meta: {
            slider: false,
          },
        }],
      }, {
        title: '菜单管理',
        path: '/system/menu',
        element: () => import('./system-menu/system-menu-list/system-menu-list.tsx'),
      }, {
        title: '角色管理',
        path: '/system/role',
        element: () => import('./system-role/system-role-list/system-role-list.tsx'),
      },
    ],
  },
]
