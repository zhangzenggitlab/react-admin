import React from 'react'
import type { BreadcrumbProps, MenuProps } from 'antd'
import { Breadcrumb, Menu } from 'antd'
import { clsx } from 'clsx'
import { css } from '@emotion/css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { Header } from '@/layout'

const routerModules: Record<string, RouterBase.PageRouter> = import.meta.glob('@/pages/**/router.tsx', {
  eager: true,
})

type MenuItem = Required<MenuProps>['items'][number]
type BreadCrumbType = {
  [key: string]: any
  key?: string
  path?: string
  title?: string
  parent?: BreadCrumbType
}

type BreadCrumbItemType = BreadcrumbProps['items']
const menuFlat: BreadCrumbType = {}
const items: MenuItem[] = initMenu()

function initMenu(): MenuItem[] {
  const routers = Object.values(routerModules)
  const menu = []

  for (const router of routers) {
    menu.push(...createMenuByRoute(router.routers))
  }

  return menu
}

function createMenuByRoute(routers: RouterConfig[]): MenuItem[] {
  const routerMenu =
    routers.map((item) => {
      if (item?.meta?.slider !== false && item.path) {
        menuFlat[item.path] = {
          key: item.path,
          path: item.path,
          title: item.title,
        }
      }

      const children = item.children ? createMenuByRoute(item.children) : []

      return {
        key: item.path,
        path: item.path,
        icon: item.icon,
        label: item.title,
        children: children?.length > 0 ? children : null,
        slider: item.meta?.slider,
      }
    }) || []

  return routerMenu.filter((item) => item?.slider !== false) as MenuItem[]
}

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [breadcrumb, setBreadcrumb] = React.useState<BreadCrumbItemType>([])
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectKeys, setSelectKeys] = React.useState<string[]>([])

  const location = useLocation()
  const navigate = $.useRouterNavigate()

  React.useEffect(() => {
    const path = location.pathname.split('/').filter((i) => i)
    const openKeys: string[] = []
    const selectKeys: string[] = []

    const breads =
      path.map((_, index) => {
        const url = `/${path.slice(0, index + 1).join('/')}`

        openKeys.push(url)
        selectKeys.push(url)

        if (menuFlat?.[url]?.title){
          return {
            title: <NavLink to={url}>{menuFlat?.[url]?.title}</NavLink>,
          }
        }
        return { title: null }
      }) || []

    setSelectKeys(selectKeys)
    setBreadcrumb(breads.filter(i=>i.title))
    setOpenKeys(openKeys)
  }, [location])

  return (
    <div className={clsx('home flex col height', home)}>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="height flex">
        <div className="height menu" style={{ width: collapsed ? '80px' : '265px' }}>
          <Menu
            items={items}
            inlineCollapsed={collapsed}
            mode="inline"
            className="height"
            openKeys={openKeys}
            selectedKeys={selectKeys}
            onClick={({ key }) => {
              navigate(key)
            }}
            onOpenChange={(openKeys) => {
              setOpenKeys(openKeys)
            }}
          />
        </div>

        <div className="width p-x-20 p-y-20">
          <Breadcrumb items={breadcrumb} className="pb-20" />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home

const home = css`
    background-color: #f5f5f5;

    .menu {
        display: flex;
        z-index: 19;
        width: 100%;
        flex-shrink: 0;
        line-height: 56px;
        border-block-end: 1px solid rgba(5, 5, 5, 0.06);
        background-color: transparent;
    }
`
