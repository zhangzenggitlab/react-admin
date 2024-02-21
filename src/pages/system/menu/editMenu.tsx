import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import AtForm from "@/components/at-form";
import { useImmer } from "use-immer";
import { Form } from "antd";

const EditMenu = forwardRef((props: any, ref: any) => {
  const [userForm2] = Form.useForm<any>();
  const editUserFormRef = useRef<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems2] = useImmer<Array<any>>([
    {
      type: "treeSelect",
      label: "父级菜单",
      name: "parentId",
      placeholder: "父级菜单",
      multiple: false,
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "菜单名称",
      name: "label",
      placeholder: "菜单名称",
      colSpan: 24,
      rules: [
        {
          required: true,
          message: "菜单名称不能为空",
        },
      ],
    },
    {
      type: "select",
      label: "菜单类型",
      name: "type",
      style: { width: 200 },
      placeholder: "菜单类型",
      options: [
        {
          label: "目录",
          value: 1,
        },
        {
          label: "菜单",
          value: 2,
        },
        {
          label: "按钮",
          value: 3,
        },
      ],
    },
    {
      type: "text",
      label: "图标",
      name: "icon",
      placeholder: "图标",
      colSpan: 24,
    },
    {
      type: "text",
      label: "组件路径",
      name: "key",
      placeholder: "组件路径",
      colSpan: 24,
    },
    {
      type: "text",
      label: "权限标识",
      name: "permission",
      placeholder: "权限标识",
      colSpan: 24,
    },
    {
      type: "text",
      label: "菜单标识",
      name: "menu",
      placeholder: "菜单标识",
      colSpan: 24,
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      style: { width: 200 },
      placeholder: "状态",
      options: [
        {
          label: "启用",
          value: 1,
        },
        {
          label: "禁用",
          value: 2,
        },
      ],
    },
  ]);
  const [menuTree] = Array<any>([
    {
      value: "0",
      label: "一级栏目",
    },
    {
      value: "1",
      label: "系统管理",
      children: [
        {
          value: "2",
          label: "用户列表",
        },
        {
          value: "3",
          label: "菜单列表",
        },
      ],
    },
  ]);
  const [treeValue, setTreeValue] = useState<Array<string>>([]);

  useEffect(() => {
    const formRef: any = editUserFormRef.current;
    formRef.setFieldsValue(props.formData);
    
    return () => {
      if (formRef) {
        formRef.resetFields();
      }
    };
  }, [props.formData]);

  useImperativeHandle(ref, () => {
    return {
      setFieldsValue: editUserFormRef.current.setFieldsValue,
      setTreeValue: setTreeValue,
      getFormValue: editUserFormRef.current.getFormValue,
      validateFields: editUserFormRef.current.validateFields,
    };
  });

  return (
    <>
      <AtForm
        ref={editUserFormRef}
        form={userForm2}
        formItems={formItems2}
        layout={layout}
        treeData={menuTree}
        treeValue={treeValue}
        footer={false}
      ></AtForm>
    </>
  );
});

export default EditMenu;
