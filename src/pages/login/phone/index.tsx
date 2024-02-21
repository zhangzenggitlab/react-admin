import "./index.scss";
import React from "react";
import { Button, Checkbox, Form, Input, message } from 'antd';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';
import ILogin from "@/interfaces/ILogin";
import { NavLink } from "react-router-dom";

function Phone() {
    const [form] = Form.useForm();

    const onFinish = () => {
        const phone = form.getFieldValue("phone");
        const code = form.getFieldValue("code");

        console.log(phone, code);
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        console.log(form);
        message.error('Submit failed!');
    };


    return (
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<ILogin>
                name="phone" rules={[{ required: true }]}>
                <Input size="large" placeholder="手机号" prefix={<MobileOutlined />} />
            </Form.Item>

            <Form.Item<ILogin>
                name="code" rules={[{ required: true }]}>
                <div className="form-item">
                    <Input size="large" placeholder="验证码" prefix={<MailOutlined />} />
                    <Button size="large" className="btn-getCode">获取验证码</Button>
                </div>
            </Form.Item>

            <Form.Item>
                <div className="form-item">
                    <Checkbox>自动登录</Checkbox>
                    <NavLink to="/register">注册账号</NavLink>
                </div>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-confirm" size="large">确定</Button>
            </Form.Item>

        </Form>
    )
}

export default Phone;