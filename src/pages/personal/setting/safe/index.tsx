import React, { useEffect, useRef, useState } from "react";
import { Form, Button, message } from "antd";
import { useImmer } from "use-immer";
import AtForm from "@/components/at-form";
import userInfoStore from "@/mobx/userInfo";
import { updatePassword } from "./api";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.scss";
function SafeSetting() {
  const [form] = Form.useForm<any>();
  const editUserFormRef = useRef<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems] = useImmer<Array<any>>([
    {
      type: "text",
      label: "旧密码",
      name: "oldPassword",
      placeholder: "旧密码",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },

    {
      type: "text",
      label: "新密码",
      name: "newPassword",
      placeholder: "新密码",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "确认密码",
      name: "confirmPassword",
      placeholder: "确认密码",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
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
      <div className="title">安全设置</div>
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
                .then((result: any) => {
                  if (result.newPassword != result.confirmPassword) {
                    message.error("两次输入的密码不一致");
                    return;
                  }

                  if (result.oldPassword == result.confirmPassword) {
                    message.error("新旧密码输入不能一致");
                    return;
                  }

                  setLoading(true);
                  updatePassword(result.oldPassword, result.newPassword).then(
                    (res: any) => {
                      if (res.code == 200) {
                        message.success("更新成功");
                        return;
                      }
                      message.error("更新失败");
                    }
                  );
                })
                .catch((err: any) => {
                  console.log(err);
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            {loading ? <LoadingOutlined /> : null}
            更新安全信息
          </Button>
        }
      ></AtForm>
    </div>
  );
}

export default SafeSetting;
