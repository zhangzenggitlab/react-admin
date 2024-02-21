import React from "react";
import * as Icon from "@ant-design/icons";
// 加载ant图标
const loadAntIconByName = (name: string) => {
  return React.createElement((Icon as any)[name]);
};

/**
 * 加载本地路由
 * @param path 组件路由
 * @returns
 */
const loadComponentByPath = async (path: string): Promise<any> => {
  return import(path);
};

export { loadAntIconByName, loadComponentByPath };
