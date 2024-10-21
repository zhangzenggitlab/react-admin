import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/home/home.tsx'
import Login from '@/pages/login/login.tsx'

console.log(Login)
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login/:id?',
    element: <Login></Login>,

  },
])
