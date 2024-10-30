import { Suspense } from 'react'

import { BaseRouter } from '@/lib'

const App = () => {
  return (
    <Suspense>
      <BaseRouter></BaseRouter>
    </Suspense>
  )
}

export default App
