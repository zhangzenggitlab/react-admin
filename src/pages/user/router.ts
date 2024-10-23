export const routers: RouterProps[] = [
  {
    title: 'user',
    path: '/user',
    element: () => import('./user-list/user-list.tsx'),
  },
]
