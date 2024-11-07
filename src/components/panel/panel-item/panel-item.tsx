import { css } from '@emotion/css'
import { theme } from 'antd'
import clsx from 'clsx'

export interface PanelItemProps extends BaseComponent {
  loading?: boolean
  rightNodes?: JSX.Element | string | null
}

export const PanelItem = (props: PanelItemProps) => {
  const { borderRadius, colorBgContainer, padding, fontSizeLG } = theme.getDesignToken()

  const { title = '', children = '', rightNodes = null, className = '', style = {} } = props

  return (
    <div
      className={clsx(panel, 'panel', className)}
      style={{ borderRadius: borderRadius, backgroundColor: colorBgContainer, padding: padding, ...style }}
    >
      <div className="title flex between">
        <span style={{ fontSize: fontSizeLG }}>{title}</span>
        <span>{rightNodes}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

const panel = css``
