export const routers: Router.RouterProps[] = [
  {
    title: 'user',
    path: '/user',
    element: () => import('./user-list/user-list.tsx'),
    children: [
      {
        title: 'user-add',
        path: '/user/add',
        element: () => import('./user-add/user-add.tsx'),
      },
    ],
  },
]
