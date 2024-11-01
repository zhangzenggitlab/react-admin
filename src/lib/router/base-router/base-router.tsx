import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from '@/components'
import { GetRoutes } from '@/router/router.tsx'

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <GetRoutes />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export { BaseRouter }
