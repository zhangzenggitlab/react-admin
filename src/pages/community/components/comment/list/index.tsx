import React, { useEffect } from "react";
import { Tree } from "antd";
import CommentRecord from "./CommentRecord";
import { useImmer } from "use-immer";
import { treeType } from "./interface";

function CommentList(props: any) {
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
      data[i].index = i;
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

  useEffect(() => {
    if (Array.isArray(props.data))
      setTreeData(dataTitleToCommentListNode(props.data));

    return () => {
      setTreeData([]);
    };
  }, [props.data]);

  const fieldNames = {
    key: "id",
  };

  return (
    <>
      <Tree treeData={treeData} fieldNames={fieldNames} />
    </>
  );
}

export default CommentList;
