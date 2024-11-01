import { useNavigate } from 'react-router-dom'

type RouterOptionsStatusType = any

const useRouterNavigate = () => {
  const navigate = useNavigate()

  return (path: string, options?: { replace?: boolean; state?: RouterOptionsStatusType }) => {
    navigate(path, options)
  }
}

export { useRouterNavigate }


