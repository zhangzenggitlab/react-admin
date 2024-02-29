import React, { useEffect } from "react";
import { Tree } from "antd";
import type { TreeDataNode } from "antd";
import CommentRecord from "./CommentRecord";
import { getCommentList } from "../../../api/api";
import { useImmer } from "use-immer";

function CommentItem() {
  const [data, setData] = useImmer<ICommentRecord[]>([
    {
      id: 1,
      name: "张三",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
      content:
        "Ant Design, a design language for background applications, is refined by Ant UED Team",
      children: [],
      toName: "李四",
    },
  ]);

  const treeData: TreeDataNode[] = [
    {
      title: <CommentRecord />,
      key: "0-0",
      children: [
        {
          title: <CommentRecord />,
          key: "0-0-0",
        },
      ],
    },
  ];

  const dataToCommentListNode = (data: ICommentRecord[]): TreeDataNode[] => {
    console.log(data);
  };

  const getCommentListfn = () => {
    getCommentList({ page: 1, pageSize: 10, commentId: 1, articleId: 1 }).then(
      (res) => {
        dataToCommentListNode(res.data);
      }
    );
  };

  useEffect(() => {
    getCommentListfn();

    return () => {
      setData([]);
    };
  }, []);

  return <Tree treeData={treeData} />;
}

export default CommentItem;
