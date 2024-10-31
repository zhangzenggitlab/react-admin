interface BeforeProps{
  id:string
}

interface PageParams {
  detail?:number
}

const UserAdd:BaseFc<BeforeProps,PageParams>= () => {
  return <div>UserAdd</div>
}

UserAdd.beforeEnter = async ({id})=>{
  console.log("获取参数:",id)
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },1000)
  })
}
export default UserAdd
