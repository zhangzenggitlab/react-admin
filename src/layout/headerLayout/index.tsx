import "./index.scss";
import { Layout, Button, Badge, Dropdown, MenuProps, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logo from "@/assets/images/logo.svg";
import UserStore from "@/mobx/userInfo";
import App from "@/initApp";
import { cos } from "@/utils/global";
function HeaderLayout(props: any) {
  const { Header } = Layout;
  const navigate = useNavigate();
  const logOut = () => {
    App.destory();
    navigate("/login");
  };
  const items: MenuProps["items"] = [
    // {
    //   key: "1",
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" className="menu-prop">
    //       个人中心
    //     </a>
    //   ),
    //   icon: <UserOutlined />,
    // },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="menu-prop"
          onClick={() => {
            navigate("/personal/setting");
          }}
        >
          个人设置
        </a>
      ),
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="menu-prop"
          onClick={logOut}
        >
          退出登录
        </a>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Header
      style={{ padding: 0 }}
      className="at-layout_header opacityBackground"
    >
      <div className="header-left">
        <div className="demo-logo-vertical">
          <img src={logo} alt="" className="logo" />
          {!props.collapsed2 ? (
            <h1 className="baselay-title">React admin</h1>
          ) : null}
        </div>
      </div>

      <div className="header-right">
        <Badge count={0}>
          <BellOutlined style={{ fontSize: 20 }} className="bellOutlined" />
        </Badge>

        <Dropdown menu={{ items }}>
          <Button type="text" className="avatar">
            <Avatar
              src={
                UserStore.userInfo ? cos + "/" + UserStore.userInfo.avatar : ""
              }
            />{" "}
            React admin
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderLayout;
