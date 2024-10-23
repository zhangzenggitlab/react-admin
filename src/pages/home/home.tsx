import { useRouterNavigate } from '@/lib'
import React from 'react'

const Home: React.FC = () => {
  const navigate = useRouterNavigate()

  return (
    <>
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        按钮
      </button>
      <div>React</div>
    </>
  )
}

export default Home
