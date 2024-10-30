interface Page {
  num: string
}

const UserList: PageProps<Page> = () => {
  return <>user-list</>
}

UserList.beforeEnter = async () => {
  console.log(111)
  return '1'
}
export default UserList
