import "./index.scss";
import React from "react";
import { Table, Pagination, Spin } from "antd";
import IAtTable from "@/interfaces/IAtTable";

function AtTable(props: IAtTable) {
  return (
    <>
      <Spin
        tip="数据加载中..."
        size="large"
        spinning={props.loading ? props.loading : false}
      >
        <Table
          columns={props.columns}
          dataSource={props.dataSource}
          pagination={false}
          rowKey={props.rowKey ? props.rowKey : "id"}
        ></Table>

        <div className="at-page">
          <Pagination
            showQuickJumper
            showSizeChanger
            total={props.total}
            onChange={props.onChange ? props.onChange : () => {}}
            pageSize={props.pageSize ? props.pageSize : 10}
          />
        </div>
      </Spin>
    </>
  );
}

export default AtTable;
