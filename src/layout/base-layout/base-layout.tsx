import React from 'react'
import { Drawer } from '@/components'
import { Outlet, useLocation } from 'react-router-dom'

export const BaseLayout = (props: BasePage) => {
  const [open,setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const path = location.pathname.indexOf('/preview')
    if (path != -1) {
      setOpen(true)
    }
  }, [location])

  return <>
    {props.children}
    {
      props.router.drawer &&
      <Drawer open={open}><Outlet></Outlet></Drawer>
    }
  </>
}