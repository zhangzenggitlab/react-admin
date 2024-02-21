import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import { GetRoutes } from "@/router/router.tsx";
import "dayjs/locale/zh-cn";
import App from "./initApp";

App.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <GetRoutes></GetRoutes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
