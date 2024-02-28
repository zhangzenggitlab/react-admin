import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";

function AtMask(props: any) {
  return ReactDOM.createPortal(
    <div className="at-mask" onClick={() => {
      props.onClose()
    }}>
      {props.children}
    </div>,
    document.body
  );
}

export default AtMask;
