import React from 'react'
import { Drawer } from '@/components'
import { useLocation } from 'react-router-dom'

export const BaseLayout = (props: BasePage) => {
  const [open] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    // console.log(props.router)
    // console.log(location)

    const path = location.pathname.indexOf("/preview")

    console.log(path)
  }, [location])

  return <>
    {props.children}
    <Drawer open={open} />
  </>
}