export const routers: Router.RouterProps[] = [
  {
    title: 'menu',
    path: '/menu',
    element: () => import('./menu-list/menu-list'),
  },
]
