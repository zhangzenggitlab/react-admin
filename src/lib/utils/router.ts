import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom'

export interface UsePreviewNavigateProps extends NavigateOptions {
  /**  跳转抽屉name */
  to: string,
  /** 路由参数 */
  params?: NavigateOptions
}

/**
 * 路由跳转
 */
export const useRouterNavigate = () => {
  const navigate = useNavigate()

  return (path: string, options?: NavigateOptions) => {
    navigate(path, options)
  }
}

/**
 * 抽屉路由预览
 */
export const usePreviewNavigate = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (props: UsePreviewNavigateProps) => {
    navigate(location.pathname + '/preview' + props.to, { ...props.params })
  }
}

