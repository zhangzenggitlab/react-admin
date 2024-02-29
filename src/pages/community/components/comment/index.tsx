import React from "react";
import "./index.scss";
import { Flex, Input, Button } from "antd";
const { TextArea } = Input;

function Comment() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };

  return (
    <Flex vertical gap={32}>
      <TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="友善评论,文明发言~"
        style={{ height: 120, resize: "none" }}
      />

      <Button type="primary" className="public-btn">
        发布
      </Button>
    </Flex>
  );
}

export default Comment;
