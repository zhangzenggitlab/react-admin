import "./index.scss";
import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ILogin from "@/interfaces/ILogin";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { login } from "@/api/index";
import { useNavigate } from "react-router-dom";
import userInfoStore from "@/mobx/userInfo";
import menuStore from "@/mobx/system/menu";

function Account() {
  const [loadings, setLoadings] = useState<boolean>(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    setLoadings(true);
    const account = form.getFieldValue("account");
    const password = form.getFieldValue("password");

    login(account, password)
      .then((res) => {
        if (res.code == 200) {
          message.success("登录成功");
          localStorage.setItem("token", res.data);
          // 获取用户信息
          userInfoStore.init();
          menuStore.getRouters().then(() => {
            navigate("/workplace");
          });
        } else {
          message.error(res.msg);
        }

        setLoadings(false);
      })
      .catch((err: any) => {
        console.log(err);
        message.error("登录失败", err);
      });
  };

  const onFinishFailed = () => {
    console.log(form);
    message.error("Submit failed!");
  };

  type loginType = Pick<ILogin, "account" | "password">;

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<loginType> name="account" rules={[{ required: true }]}>
        <Input
          size="large"
          placeholder="账号:admin"
          prefix={<UserOutlined />}
        />
      </Form.Item>

      <Form.Item<loginType> name="password" rules={[{ required: true }]}>
        <Input.Password
          size="large"
          placeholder="密码:123456"
          prefix={<LockOutlined />}
        />
      </Form.Item>

      <Form.Item>
        <div className="form-item">
          <Checkbox>自动登录</Checkbox>
          <NavLink to="/register">注册账号</NavLink>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-confirm"
          size="large"
          loading={loadings}
        >
          确定
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Account;
