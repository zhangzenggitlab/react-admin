interface BeforeProps{
  id:string
}

interface PageParams {
  detail?:number
}

const UserAdd:BaseFc<BeforeProps,PageParams>= () => {
  return <div>UserAdd</div>
}

export default UserAdd
