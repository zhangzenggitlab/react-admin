interface ICommentRecord{
    id: number;
    name: string;
    toName?:string;                   // 接收人
    avatar: string;
    content: string;
    mySelf?: boolean;                // 是否是本人数据
    children: ICommentRecord[];
}

export default ICommentRecord;