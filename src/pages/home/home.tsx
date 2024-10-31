import { useRouterNavigate } from '@/lib'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useRouterNavigate()

  return (
    <>
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        login
      </button>

      <button
        onClick={() => {
          navigate('/user')
        }}
      >
        user
      </button>

      <button
        onClick={() => {
          navigate('/user/add/2')
        }}
      >
        user-add
      </button>
      <Outlet></Outlet>
    </>
  )
}

export default Home
