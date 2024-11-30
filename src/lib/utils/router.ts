import { NavigateOptions, useLocation, useNavigate as ReactUseNavigate } from 'react-router-dom'

export interface UsePreviewNavigateProps extends NavigateOptions {
  /**  跳转抽屉name */
  to: string,
  /** 路由参数 */
  params?: NavigateOptions
}

/**
 * 路由跳转
 */
export const useNavigate = () => {
  const navigate = ReactUseNavigate()
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

export let navigate = (path: string, options?: NavigateOptions) => {
  const navigate = useNavigate()

  navigate(path, options)
}