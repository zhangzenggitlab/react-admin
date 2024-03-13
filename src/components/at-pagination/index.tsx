import React from "react";
import { Pagination } from "antd";
import IPage from "@/interfaces/IPage";

function AtPagination(props: IPage) {
  return (
    <Pagination
      showQuickJumper
      showSizeChanger
      total={props.total}
      onChange={props.onChange ? props.onChange : () => {}}
      pageSize={props.pageSize ? props.pageSize : 10}
    />
  );
}

export default AtPagination;
