import React from "react";
import { Drawer } from "antd";

function AtDrawer(props: any) {
  return (
    <Drawer
      title={props.title}
      width={props.width}
      placement={props.placement}
      onClose={props.onClose}
      open={props.open}
      mask={props.mask}
      footer={props.footer}
      // className="opacityBackground"
    >
      {props.children}
    </Drawer>
  );
}

export default AtDrawer;
