import "./index.scss";
import React from "react";
import { Flex, Input, Button, message } from "antd";
const { TextArea } = Input;
interface IProps {
  onSend: (value: string) => void; // 发送按钮回调
}

function Comment(props: IProps) {
  const [value, setValue] = React.useState("");
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
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

      <Flex justify={"flex-end"}>
        <Button
          type="primary"
          className="public-btn"
          onClick={() => {
            if (!value) {
              message.error("请填写评论内容");
              return;
            }

            if (props.onSend) {
              props.onSend(value);
            }
          }}
        >
          发布
        </Button>
      </Flex>
    </Flex>
  );
}

export default Comment;
