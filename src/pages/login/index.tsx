import "./index.scss";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import Account from "./account";
import Phone from "./phone";

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
function Login() {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '账户密码登录',
            children: <Account />,
        },
        {
            key: '2',
            label: '手机号登录',
            children: <Phone />,
        },

    ];

    return (
        <div className="login">
            <div className="form-login">
                <div className="login-head">
                    <img src={Logo} alt="" className="logo" />
                    <span className="title">React admin</span>
                </div>

                <div className="sub-title">Ant Design 是西湖区最具影响力的 Web 设计规范</div>

                <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} className="tabs"></Tabs>

            </div>
            <div className="copyright">Copyright © 2023 ***科技有限公司</div>
        </div>
    )
}

export default Login;