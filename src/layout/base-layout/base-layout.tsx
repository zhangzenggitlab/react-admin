import React from 'react'
import { Button, Drawer } from '@/components'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { css } from '@emotion/css'
import { clsx } from 'clsx'

export function BaseLayout<T>(props: BasePage & T) {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    const path = location.pathname.indexOf('/preview')

    if (path != -1) {
      const pathname = location.pathname.substring(0, path)
      // 检测是否是抽屉路由，不能仅仅判断是/preview
      if (location.pathname.indexOf(pathname, path) != -1) {
        setOpen(true)
        return
      }
      setOpen(false)
      return
    }
    setOpen(false)

  }, [location])

  return <>
    {props.children}
    {
      props.router.drawer &&
      <Drawer open={open} extra={<Button type={'link'}> 打开新窗口 </Button>}
              className={clsx(baseLayout, 'base-layout')} width="80%" onClose={() => {
        setOpen(false)

        const path = location.pathname.indexOf('/preview')
        const pathname = location.pathname.substring(0, path)
        navigate(pathname)

      }}><Outlet></Outlet></Drawer>
    }
  </>
}

const baseLayout = css`
    width: 100%;

`