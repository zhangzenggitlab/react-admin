import "./index.scss";
import React from "react";
import { Avatar, List, Popconfirm } from "antd";
import { treeType } from "./interface";
import { CaretRightOutlined } from "@ant-design/icons";
interface IProps {
  data: Array<treeType>;
  onReply: (data: treeType) => void; // 点击回复按钮回调
}

function CommentRecord(props: IProps) {
  const replyNode = (data: treeType) => {
    if (data.toName) {
      return (
        <div>
          {data.name} <CaretRightOutlined /> {data.toName}
        </div>
      );
    }
    
    return <div>{data.name}</div>;
  };

  const createAction = (item: treeType): Array<any> => {
    const actions: Array<any> = [];

    if (!item.mySelf) {
      actions.push(
        <a
          key="list-loadmore-edit"
          onClick={() => {
            props.onReply(item);
          }}
        >
          回复
        </a>
      );
    }

    if (item.mySelf) {
      actions.push(
        <Popconfirm
          title="删除"
          description="确认删除?"
          onConfirm={() => {
            console.log(item);
          }}
          onCancel={() => {}}
          okText="是"
          cancelText="否"
        >
          <a key="list-loadmore-edit">删除</a>
        </Popconfirm>
      );
    }

    return actions;
  };

  return (
    <List
      className="comment-record"
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item: treeType) => (
        <List.Item actions={createAction(item)}>
          <List.Item.Meta
            avatar={<Avatar src={item.img} />}
            title={replyNode(item)}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
}

export default CommentRecord;
