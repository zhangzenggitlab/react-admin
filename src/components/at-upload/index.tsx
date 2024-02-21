import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import {Upload, Button } from "antd";

function AtUpload(props: IUpload) {
  const action = "/api/txCos/upload";
  const headers: any = {
    token: localStorage.getItem("token"),
  };
  const beforeUpload = (file: any) => {
    console.log(file);
    return true;
  };

  return (
    <>
      <Upload
        name="file"
        className="avatar-uploader"
        showUploadList={false}
        action={action}
        headers={headers}
        beforeUpload={beforeUpload}
        onChange={(info: any) => {
          if ("done" === info.file.status) {
            props.onChange(info.file.response);
          }
        }}
      >
        <Button icon={<UploadOutlined />}>上传头像</Button>
      </Upload>
    </>
  );
}

interface IUpload {
  beforeUpload: (file: any) => void;
  onChange: (info: any) => void;
}
export default AtUpload;
