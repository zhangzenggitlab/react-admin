import "./index.scss";
import React, { useEffect } from "react";
import { Col, Row, Space, Card, Tag, Flex, Divider } from "antd";
import AtProList from "./components/at-proList";
import type { Dayjs } from "dayjs";
import { Calendar, Input } from "antd";
import type { CalendarProps } from "antd";
import { iProListItem } from "./components/at-proList/interface";
import AtPagination from "@/components/at-pagination";
import Comment from "./components/comment";
import Article from "./components/article";
import AtMask from "@/components/at-mask";
import CommentList from "./components/comment/list";
import { treeType } from "./components/comment/list/interface";
import { getCommentList } from "./api/api";
import { useImmer } from "use-immer";

function Community() {
  const { Search } = Input;
  const [showArticle, setShowArticle] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const dataSource: Array<iProListItem> = [
    {
      id: 1,
      title: "语雀的天空",
      tags: ["语雀专栏", "设计语言", "蚂蚁金服"],
      link: 12,
      like: 13,
      collect: 10,
    },
    { id: 2, title: "Ant Design", tags: [], link: 12, like: 13, collect: 10 },
    {
      id: 3,
      title: "蚂蚁金服体验科技",
      tags: [],
      link: 12,
      like: 13,
      collect: 10,
    },
    { id: 4, title: "TechUI", tags: [], link: 12, like: 13, collect: 10 },
  ];

  const onSearch = (text: string) => {
    console.log(text);
  };

  const [treeData, setTreeData] = useImmer<treeType[]>([]);

  const getCommentListfn = () => {
    getCommentList({ page: 1, pageSize: 10, commentId: 1, articleId: 1 }).then(
      (res) => {
        setTreeData(res.data);
      }
    );
  };

  useEffect(() => {
    getCommentListfn();

    return () => {
      setTreeData([]);
    };
  }, []);

  return (
    <div className="main-page">
      {showArticle ? (
        <AtMask
          onClose={() => {
            setShowArticle(false);
          }}
        >
          <div className="mask-content">
            <Article />

            <Divider />

            <Comment
              onSend={(text: string) => {
                console.log(text);
              }}
            />

            <Divider />

            <CommentList
              data={treeData}
              onReply={(data: treeType) => {
                console.log(data);
                setShowComment(true);
              }}
            />
          </div>
        </AtMask>
      ) : null}

      {showComment ? (
        <AtMask
          onClose={() => {
            setShowComment(false);
          }}
        >
          <div className="mask-content">
            <Comment></Comment>
          </div>
        </AtMask>
      ) : null}

      <div className="search-input">
        <Search placeholder="你随便输入,我随便搜索~" onSearch={onSearch} />
      </div>

      <Row gutter={[26, 26]}>
        <Col span={18}>
          <AtProList
            dataSource={dataSource}
            commentfn={(data: any) => {
              console.log(data);
              setShowArticle(true);
            }}
          ></AtProList>

          <div className="page">
            <AtPagination></AtPagination>
          </div>
        </Col>
        <Col span={6}>
          <Space direction="vertical">
            <Card>
              <Flex wrap="wrap" gap="small">
                <Tag>随便说说~</Tag>
                <Tag>前端</Tag>
                <Tag>Java</Tag>
                <Tag>Mysql</Tag>
                <Tag>运维</Tag>
                <Tag>GoLang</Tag>
                <Tag>Andriod</Tag>
                <Tag>IOS</Tag>
              </Flex>
            </Card>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Community;
