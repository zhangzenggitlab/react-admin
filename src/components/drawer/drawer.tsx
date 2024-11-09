import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd'
import { clsx } from 'clsx'
import { css } from '@emotion/css'

export interface DrawerProps extends AntDrawerProps {
  title?: string
  open: boolean
}

export const Drawer = (props: DrawerProps) => {
  const { children = null, title = '',maskClosable = true } = props

  return (<AntDrawer maskClosable={maskClosable} {...props}>
    <div className={clsx(drawer, 'flex between')}>
      <span>{title}</span>
    </div>
    {children}
  </AntDrawer>)
}

const drawer = css`

`

