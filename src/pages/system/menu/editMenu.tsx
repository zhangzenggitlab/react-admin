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
import MenuStore from "@/mobx/system/menu";

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
      fieldNames: {
        value: "id",
        label: "name",
      },
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
      name: "name",
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
      label: "权限标识",
      name: "permission",
      align: "center",
      placeholder: "权限标识",
      colSpan: 24,
    },
    {
      type: "text",
      label: "组件路径",
      name: "path",
      placeholder: "组件路径",
      colSpan: 24,
    },
    {
      type: "inputNumber",
      label: "排序",
      name: "sort",
      placeholder: "排序",
      colSpan: 24,
      min: 1,
    },

    {
      type: "select",
      label: "显示在左侧",
      name: "hideMenu",
      style: { width: 200 },
      placeholder: "是否显示在左侧",
      options: [
        {
          label: "显示",
          value: 1,
        },
        {
          label: "隐藏",
          value: 2,
        },
      ],
      rules: [
        {
          required: true,
          message: "不能为空",
        },
      ],
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
      rules: [
        {
          required: true,
          message: "不能为空",
        },
      ],
    },
  ]);
  const [menuTree, setMenuTree] = useImmer<Array<any>>([
    {
      id: 0,
      name: "一级栏目",
    },
  ]);

  const [treeValue, setTreeValue] = useState<Array<string>>([]);

  useEffect(() => {
    const formRef: any = editUserFormRef.current;
    formRef.setFieldsValue(props.formData);
    console.log(MenuStore.menuTree);

    setMenuTree((drft) => {
      drft.push(...MenuStore.menuTree);
    });

    return () => {
      if (formRef) {
        formRef.resetFields();
      }

      setMenuTree([
        {
          id: 0,
          name: "一级栏目",
        },
      ]);
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
