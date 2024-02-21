import React, { useEffect, useState } from "react";
import { Input, Tree } from "antd";
import { useImmer } from "use-immer";
import DepartmentStore from "@/mobx/system/department";
import IDepartment from "@/interfaces/IDepartment";

function TreeDepartment(props: any) {
  const [treeData, setTreeData] = useState<any>([]);
  const [expandedKeys, setExpandedKeys] = useImmer<any>([]);
  const [timerVariable, setTimerVariable] = useState<any>(null);

  const findParentId = (name: string, treeDatas: Array<IDepartment>) => {
    treeDatas.map((item: IDepartment) => {
      if (item.name.indexOf(name) > -1) {
        setExpandedKeys((draf: Array<number>) => {
          draf.push(item.parentId);
        });
      }

      if (item.children) {
        findParentId(name, item.children);
      }
    });
  };

  const timerVariablefn = (value: string) => {
    if (timerVariable) {
      clearTimeout(timerVariable);
      setTimerVariable(null);
    }

    const timeoutId = setTimeout(() => {
      setExpandedKeys([]);
      findParentId(value, treeData);
    }, 500);

    setTimerVariable(timeoutId);
  };

  useEffect(() => {
    setTreeData(DepartmentStore.listDepartment);

    return () => {
      setTreeData([]);
      [];
    };
  }, []);

  return (
    <>
      <Input
        style={{ marginBottom: 8 }}
        placeholder="部门名称"
        onChange={(e: any) => {
          const { value } = e.target;
          timerVariablefn(value);
        }}
      />
      <Tree
        onExpand={(expandedKeys: any) => {
          console.log(expandedKeys);
          setExpandedKeys(expandedKeys);
        }}
        treeData={treeData}
        expandedKeys={expandedKeys}
        fieldNames={{ title: "name", key: "id" }}
        onSelect={props.onSelect}
      />
    </>
  );
}

export default TreeDepartment;
