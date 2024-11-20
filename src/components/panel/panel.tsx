import React, { ForwardRefExoticComponent } from 'react'

import { theme } from 'antd'
import clsx from 'clsx'

import { PanelItem } from './panel-item'

export interface PanelProps extends BaseComponent {
  loading?: boolean
  title?:string
}

interface PanelType {
  Item: typeof PanelItem
}

type PanelNodeType = <T>(props: T) => React.ReactNode

export const Panel = React.forwardRef((props: PanelProps) => {
  const { fontSizeXL, colorTextHeading } = theme.getDesignToken()
  const { title = '', children = '' } = props

  return (
    <div className={clsx('panel')}>
      <div style={{ color: colorTextHeading, fontSize: fontSizeXL }}>{title}</div>
      <div>{children}</div>
    </div>
  )
}) as ForwardRefExoticComponent<PanelProps> as unknown as PanelType & PanelNodeType

Panel.Item = PanelItem

