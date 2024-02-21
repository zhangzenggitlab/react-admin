import "./index.scss";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import { Button, Form, Input, message, Select } from "antd";
import { MailOutlined } from "@ant-design/icons";
import ILogin from "@/interfaces/ILogin";
import { NavLink } from "react-router-dom";

function Register() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 80 }}>
      <Option value="add">+86</Option>
      <Option value="minus">+87</Option>
    </Select>
  );

  const onFinish = () => {
    const account = form.getFieldValue("account");
    const password = form.getFieldValue("password");
    console.log(account, password);
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    console.log(form);
    message.error("Submit failed!");
  };

  return (
    <div className="login">
      <div className="form-login">
        <div className="login-head">
          <img src={Logo} alt="" className="logo" />
          <span className="title">React admin</span>
        </div>

        <div className="sub-title">
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>

        <div className="register-text">注册</div>
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<ILogin> name="mail" rules={[{ required: true }]}>
            <Input size="large" placeholder="邮箱" />
          </Form.Item>

          <Form.Item<ILogin> name="password" rules={[{ required: true }]}>
            <Input.Password size="large" placeholder="密码" />
          </Form.Item>

          <Form.Item<ILogin> name="password" rules={[{ required: true }]}>
            <Input.Password size="large" placeholder="确认密码" />
          </Form.Item>

          <Form.Item name="phone" rules={[{ required: true }]}>
            <Input
              size="large"
              addonBefore={selectBefore}
              placeholder="11位手机号"
            />
          </Form.Item>

          <Form.Item<ILogin> name="code" rules={[{ required: true }]}>
            <div className="form-item">
              <Input
                size="large"
                placeholder="验证码"
                prefix={<MailOutlined />}
              />
              <Button size="large" className="btn-getCode">
                获取验证码
              </Button>
            </div>
          </Form.Item>

          <Form.Item<ILogin>>
            <div className="form-item">
              <Button
                type="primary"
                htmlType="submit"
                className="btn-register"
                size="large"
              >
                注册
              </Button>
              <NavLink to="/login">使用已有账户登录</NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
      <div className="copyright">Copyright © 2023 ***科技有限公司</div>
    </div>
  );
}

export default Register;
