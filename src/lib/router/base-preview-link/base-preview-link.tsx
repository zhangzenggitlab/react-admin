import {  useLocation, } from 'react-router-dom'

import { BaseLink } from '@/lib'

export interface BasePreviewLinkProps extends BaseComponent{
  /** 路由path */
  to: string
}

/**
 * 路由需要被配置为抽屉类型
 * 抽屉预览打开窗口
 */
export const BasePreviewLink = (props: BasePreviewLinkProps) => {
  const location = useLocation()


  return <BaseLink to={location.pathname + '/preview' + props.to} >
    {props.children}
  </BaseLink>
}