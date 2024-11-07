import { useNavigate } from 'react-router-dom'

type RouterOptionsStatusType = any

/**
 * 路由跳转
 */
export const useRouterNavigate = () => {
  const navigate = useNavigate()

  return (path: string, options?: { replace?: boolean; state?: RouterOptionsStatusType }) => {
    navigate(path, options)
  }
}



