
import type { TreeDataNode } from "antd";

type ICommentRecord = {
    id: number;
    name: string;
    toName?:string;                    // 接收人
    img: string;                       // 头像
    content: string;
    mySelf?: boolean;                 // 是否是本人数据
    children: treeType[];
}
export type treeType = TreeDataNode & ICommentRecord;

export default ICommentRecord;