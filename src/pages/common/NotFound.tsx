import React from "react";
import { Button, Empty } from "antd";
function NotFound() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description={
        <span>
        <a >404</a>
        </span>
      }
    >
      <Button type="primary">返回上一页</Button>
    </Empty>
  );
}

export default NotFound;
