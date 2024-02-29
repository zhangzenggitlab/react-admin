import "./index.scss";
import React from "react";
import { Avatar, List } from "antd";
import ICommentRecord from "./interface";

function CommentRecord(props: any) {
  return (
    <List
      className="comment-record"
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item:ICommentRecord) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">回复</a>,
            <a key="list-loadmore-more">删除</a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.name}
            description={item.content}
          />
        </List.Item>
      )}
    />
  );
}

export default CommentRecord;
