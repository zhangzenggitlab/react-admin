import { useHttp } from '@/lib'
import React from 'react'

interface PageProps {
  num: string
}

interface BeforeProps {
  id: string
}

interface User {
  name: string
}
const UserList: BaseFc<BeforeProps, PageProps> = () => {
  const { getData, data } = useHttp(getList, {}, true)

  async function getList(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'z',
        })
      }, 300)
    })
  }

  React.useEffect(() => {
    getData().then((res) => {
      console.log(res.name)
    })
  }, [])

  return (
    <>
      user-list
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default UserList
