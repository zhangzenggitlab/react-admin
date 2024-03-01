import React, { useEffect } from "react";
import { Tree } from "antd";
import CommentRecord from "./CommentRecord";
import { getCommentList } from "../../../api/api";
import { useImmer } from "use-immer";
import { treeType } from "./interface";

function CommentItem(props:any) {
  const [treeData, setTreeData] = useImmer<treeType[]>([]);

  /**
   *
   * @param data 将数组数据转为评论列表节点
   */

  const dataTitleToCommentListNode = (data: treeType[]): treeType[] => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        dataTitleToCommentListNode(data[i].children);
      }
      data[i].title = (
        <CommentRecord
          data={[data[i]]}
          onReply={(data: treeType) => {
            props.onReply(data);
          }}
        />
      );
    }

    return data;
  };

  const getCommentListfn = () => {
    getCommentList({ page: 1, pageSize: 10, commentId: 1, articleId: 1 }).then(
      (res) => {
        const data = dataTitleToCommentListNode(res.data);
        setTreeData(data);
      }
    );
  };

  useEffect(() => {
    getCommentListfn();

    return () => {
      setTreeData([]);
    };
  }, []);

  const fieldNames = {
    key: "id",
  };

  return (
    <>
     
      <Tree treeData={treeData} fieldNames={fieldNames} />
    </>
  );
}

export default CommentItem;
