export const routers: RouterConfig[] = [
  {
    title: 'user',
    path: '/user',
    element: () => import('./user-list/user-list.tsx'),

    children: [
      {
        title: 'user-add',
        path: '/user/add/:id',
        element: () => import('./user-add/user-add.tsx'),
      },
    ],
  },
]
