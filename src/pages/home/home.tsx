import React from 'react'
import { SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Breadcrumb } from 'antd'
import { clsx } from 'clsx'
import { css } from '@emotion/css'

import { Header } from '@/layout'
import { Outlet, useLocation } from 'react-router-dom'

const Home: React.FC = () => {
  type MenuItem = Required<MenuProps>['items'][number]
  const items: MenuItem[] = [
    {
      label: '系统管理',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
  ]

  const [collapsed, setCollapsed] = React.useState(false)

  const location = useLocation()

  React.useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <div className={clsx('home flex col height', home)}>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="height flex ">
        <div className="height menu" style={{ width: collapsed ? '80px' : '265px' }}>
          <Menu items={items} inlineCollapsed={collapsed} mode="inline" className="height" />
        </div>

        <div className="width p-x-20 p-y-20">
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: 'An Application',
              },
            ]}
            className="pb-20"
          />
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
    background-color: #fff;
    flex-shrink: 0;
  }
`
