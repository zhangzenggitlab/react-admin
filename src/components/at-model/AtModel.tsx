import React from "react";
import { Modal } from "antd";
import IModel from "@/interfaces/IAtModel";

function AtModel(props: IModel) {
  return (
    <Modal
      title={props.title}
      open={props.open}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      {props.children}
    </Modal>
  );
}

export default AtModel;
