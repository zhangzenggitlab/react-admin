import { theme } from 'antd'
import clsx from 'clsx'

import { PanelItem } from './panel-item'

export interface PanelProps extends BaseComponent {
  loading?: boolean
}

export const Panel = (props: PanelProps) => {
  const { fontSizeXL, colorTextHeading } = theme.getDesignToken()
  const { title = '', children = '' } = props

  return (
    <div className={clsx('panel')}>
      <div style={{ color: colorTextHeading, fontSize: fontSizeXL }}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

Panel.Item = PanelItem

