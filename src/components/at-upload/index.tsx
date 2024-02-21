import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";

function AtUpload(props: IUpload) {
  const action = "/upload";
  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  return (
    <>
      <Upload
        name="avatar"
        className="avatar-uploader"
        showUploadList={false}
        action={action}
        beforeUpload={beforeUpload}
        onChange={(info: any) => {
          if ("done" === info.file.status) {
            console.log(info.file);
            props.onChange(info.file.response.data);
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
