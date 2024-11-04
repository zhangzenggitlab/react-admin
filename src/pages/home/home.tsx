import React from 'react'
import { Outlet } from 'react-router-dom'

import { useRouterNavigate } from '@/lib'
import { Button } from '@/components'

const Home: React.FC = () => {
  const navigate = useRouterNavigate()

  return (
    <div className="flex gap-20">
      <Button
        onClick={() => {
          navigate('/login')
        }}
      >
        login
      </Button>

      <Button
        onClick={() => {
          navigate('/user')
        }}
      >
        user
      </Button>

      <Button
        onClick={() => {
          navigate('/user/add/2',{
state:{
  name:"zzz"
}
          })
        }}
      >
        user-add
      </Button>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
