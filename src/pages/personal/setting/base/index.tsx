import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, Button, Avatar, Space } from "antd";
import { useImmer } from "use-immer";
import { LoadingOutlined } from "@ant-design/icons";
import { updateUserInfo } from "./api";
import IResponse from "@/interfaces/common";
import AtForm from "@/components/at-form";
import userInfoStore from "@/mobx/userInfo";
import "./index.scss";
import IUser from "@/pages/system/user/interface";
import AtUpload from "@/components/at-upload";

function BaseSetting() {
  const imageUrl =
    "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";
  const [form] = Form.useForm<any>();
  const editUserFormRef = useRef<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems] = useImmer<Array<any>>([
    {
      type: "text",
      label: "部门",
      name: "department",
      placeholder: "部门",
      colSpan: 24,
      disabled: true,
    },
    {
      type: "text",
      label: "用户名",
      name: "name",
      placeholder: "用户名",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "账号",
      name: "account",
      placeholder: "账号",
      colSpan: 24,
      disabled: true,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "手机号",
      name: "phone",
      placeholder: "手机号",
      colSpan: 24,
    },
    {
      type: "text",
      label: "邮箱",
      name: "mail",
      placeholder: "邮箱",
      colSpan: 24,
    },
    {
      type: "text",
      label: "角色",
      name: "roles",
      colSpan: 24,
      disabled: true,
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const formRef: any = editUserFormRef.current;
    formRef.setFieldsValue(userInfoStore.userInfo);

    return () => {
      formRef.setFieldsValue({});
    };
  }, []);

  return (
    <div className="baseSetting">
      <div className="title">基本设置</div>
      <Row>
        <Col span={8}>
          <AtForm
            ref={editUserFormRef}
            form={form}
            formItems={formItems}
            layout={layout}
            footer={
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  editUserFormRef.current
                    .validateFields()
                    .then((result: IUser) => {
                      setLoading(true);
                      updateUserInfo(result).then((res: IResponse) => {
                        if (res.code == 200) {
                          setLoading(false);
                          result.avatar = userInfoStore.userInfo.avatar;
                          userInfoStore.update(result);
                        }
                      });
                    })
                    .catch((err: any) => {
                      console.log(err);
                    });
                }}
              >
                {loading ? <LoadingOutlined /> : null} 更新基本信息
              </Button>
            }
          ></AtForm>
        </Col>
        <Col span={14} className="avatar">
          <div className="label">头像</div>
          <Space direction={"vertical"}>
            <div>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={imageUrl}
              />
            </div>
            <div>
              <AtUpload onChange={() => {}} beforeUpload={() => {}}></AtUpload>
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default BaseSetting;
