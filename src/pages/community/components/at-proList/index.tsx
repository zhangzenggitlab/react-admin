import { ProList } from "@ant-design/pro-components";
import React from "react";
import { Button, Tag } from "antd";
import {
  LikeOutlined,
  ReadOutlined,
  MessageOutlined,
  EditOutlined,
} from "@ant-design/icons";

function AtProList(props: any) {
  const IconText = ({
    icon,
    text,
    fn,
  }: {
    icon: any;
    text: string;
    fn: (props: any) => any;
  }) => (
    <span
      onClick={() => {
        fn(props);
      }}
    >
      <span style={{ marginRight: 8 }}>{icon}</span>
      {text}
    </span>
  );

  const mapTags = (tags: Array<string>, textNode: any) => {
    if (tags.length == 0) {
      return <>{textNode}</>;
    }

    return tags.map((val: string, index: number) => {
      return <Tag key={index}>{val}</Tag>;
    });
  };

  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="2" type="primary">
            <EditOutlined />
            吐槽一下~
          </Button>,
        ];
      }}
      itemLayout="vertical"
      rowKey="id"
      headerTitle="言论自由区"
      dataSource={props.dataSource}
      metas={{
        title: {},
        description: {
          render: (text: React.ReactNode, record: any) => (
            <>{mapTags(record.tags, text)}</>
          ),
        },
        actions: {
          render: (text: React.ReactNode, record: any) => [
            <IconText
              icon={<ReadOutlined />}
              text={record.collect}
              key="list-vertical-star-o"
              fn={() => {}}
            />,
            <IconText
              icon={<LikeOutlined />}
              text={record.like}
              key="list-vertical-like-o"
              fn={() => {}}
            />,
            <IconText
              icon={<MessageOutlined />}
              text={record.link}
              key="list-vertical-message"
              fn={()=>{
                props.commentfn(record);
              }}
            />,
          ],
        },
        extra: {
          render: () => (
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          ),
        },
        content: {
          render: () => {
            return (
              <div>
                段落示意：蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
              </div>
            );
          },
        },
      }}
    />
  );
}

export default AtProList;
