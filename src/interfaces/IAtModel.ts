interface IModel {
    title:string
    open:boolean
    onOk?:()=>void
    onCancel?:()=>void
    children?:any
}

export default IModel;