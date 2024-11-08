import React from 'react'
import { Button, Drawer } from '@/components'
import { Outlet, useLocation } from 'react-router-dom'
import { css } from '@emotion/css'
import { clsx } from 'clsx'

export const BaseLayout = (props: BasePage) => {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const path = location.pathname.indexOf('/preview')

    if (path != -1) {
      const pathname = location.pathname.substring(0,path)

      if (location.pathname.indexOf(pathname,path) != -1){
        setOpen(true)
      }else {
        setOpen(false)
      }
    }else{
      setOpen(false)
    }

  }, [location])

  return <>
    {props.children}
    {
      props.router.drawer &&
      <Drawer open={open}  extra={<Button type={'link'}> 打开新窗口 </Button>} className={clsx(baseLayout, 'base-layout')} width="80%" onClose={()=>{
        setOpen(false)

        const path = location.pathname.indexOf('/preview')
        const pathname = location.pathname.substring(0,path)
        history.pushState(null,'',pathname)
      }}><Outlet></Outlet></Drawer>
    }
  </>
}

const baseLayout = css`
    width: 100%;

`