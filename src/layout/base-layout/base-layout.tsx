import React from 'react'
import { Drawer } from '@/components'

export const BaseLayout = (props: BasePage) => {
  const [open] = React.useState(false)

  return <>
    {props.children}
    <Drawer open={open} />
  </>
}