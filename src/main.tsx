import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { router } from '@/router'
import {BaseRouter} from '@/lib'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseRouter router={router} />
  </StrictMode>,
)
