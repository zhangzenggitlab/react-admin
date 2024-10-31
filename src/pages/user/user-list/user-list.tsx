interface PageProps {
  num: string
}

interface BeforeProps {
  id: string
}
const UserList:BaseFc<BeforeProps, PageProps> = () => {
  return <>user-list</>
}

export default UserList
