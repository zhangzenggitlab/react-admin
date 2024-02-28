export interface iProListItem {
    title?: string
    tags: Array<string>
    createTime?: string
    link: number
    like: number
    collect: number
    img?: string
    desc?: string
    introduction?:string
}

interface IProList {
    headerTitle?: string
    dataSource: Array<iProListItem>
}

export default IProList