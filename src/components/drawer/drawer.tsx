import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd'
import { clsx } from 'clsx'
import { css } from '@emotion/css'

export interface DrawerProps extends AntDrawerProps {
  title?: string
}

export const Drawer = (props: DrawerProps) => {
  const { children = null, title = '' } = props

  return (<AntDrawer {...props}>
    <div className={clsx(drawer, 'flex between')}>
      <span>{title}</span>
      <span>打开新窗口</span>
    </div>
    {children}
  </AntDrawer>)
}

const drawer = css`

`

