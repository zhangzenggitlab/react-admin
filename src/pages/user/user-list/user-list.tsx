interface Page {
  num: string
}

interface Before {
  id: string
}
const UserList: PageProps<Page, Before> = () => {
  return <>user-list</>
}

UserList.beforeEnter = async (props) => {
  console.log(111)
  return new Promise((resolve) => {
    resolve({
      num: '1',
    })
  })
}
export default UserList
