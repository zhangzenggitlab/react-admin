import { css } from '@emotion/css'
import { theme } from 'antd'
import clsx from 'clsx'

import { PanelItem } from './panel-item'
import React from 'react'

export interface PanelProps extends BaseComponent {
  loading?: boolean
}

type BasePanel = {
  Item: typeof PanelItem
  [key:string] :any
}

export const Panel = (props: PanelProps):any => {
  const { fontSizeXL, colorTextHeading } = theme.getDesignToken()
  const { title = '', children = '' } = props

  return (
    <div className={clsx(panel, 'panel')}>
      <div style={{ color: colorTextHeading, fontSize: fontSizeXL }}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

Panel.Item = PanelItem

const panel = css`
    .panel {
        .title {
        }
    }
`
