import "./index.scss";
import { useState } from "react";
import { Layout, message } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import MenuLayout from "../menuLayout";
import HeaderLayout from "../headerLayout";
import DepartmentStore from "@/mobx/system/department";

function BaseLayout(props: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed2, setCollapsed2] = useState(false);
  const { Sider } = Layout;
  const navigate = useNavigate();

  useEffect(() => {
    // 检查是否登录
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("请先登录");
      navigate("/login");
      return;
    }
    const init = async () => {
      await DepartmentStore.init();
    };

    init();

    return () => {
      DepartmentStore.clear();
    };
  }, []);

  return (
    <Layout className="baseLayout">
      <HeaderLayout
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        collapsed2={collapsed2}
        setCollapsed2={setCollapsed2}
      ></HeaderLayout>

      <Layout className="">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="side "
          theme="light"
          width={230}
        >
          <div
            className="side-arrow"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? (
              <LeftOutlined className="RightOutlined" />
            ) : (
              <RightOutlined className="RightOutlined" />
            )}
          </div>
          <MenuLayout></MenuLayout>
        </Sider>
        <Layout className="at-layout">{props.children}</Layout>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
