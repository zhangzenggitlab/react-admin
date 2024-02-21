import React, { useState } from "react";
import { Row, Col, Menu } from "antd";
import BaseSetting from "./base";
import SafeSetting from "./safe";

function Setting() {
  const items = [
    {
      label: "基本设置",
      key: "base",
    },
    {
      label: "安全设置",
      key: "safe",
    },
  ];
  const [selectedKey] = useState<Array<string>>(["base"]);
  const [componentKey, setComponentKey] = useState<string>("base");

  const components: any = {
    base: <BaseSetting />,
    safe: <SafeSetting />,
  };

  return (
    <div className="default-contant">
      <Row>
        <Col span={3}>
          <Menu
            onSelect={({ key }) => {
              setComponentKey(key);
            }}
            items={items}
            defaultSelectedKeys={selectedKey}
          />
        </Col>
        <Col span={20}>{components[componentKey]}</Col>
      </Row>
    </div>
  );
}

export default Setting;
