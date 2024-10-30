import { BrowserRouter } from 'react-router-dom'

import { GetRoutes } from '@/router/router.tsx'

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  )
}

export { BaseRouter }
