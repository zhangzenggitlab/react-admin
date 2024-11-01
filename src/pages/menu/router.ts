export const routers: RouterConfig[] = [
  {
    title: 'menu',
    path: '/menu',
    element: () => import('./menu-list/menu-list'),
  },
]
