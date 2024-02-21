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
import DepartmentStore from "@/mobx/system/department";

const EditDepartment = forwardRef((props: any, ref: any) => {
  const [userForm2] = Form.useForm<any>();
  const editUserFormRef = useRef<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems2] = useImmer<Array<any>>([
    {
      type: "treeSelect",
      label: "父级部门",
      name: "parentId",
      placeholder: "父级部门",
      multiple: false,
      colSpan: 24,
      fieldNames: {
        value: "id",
        label: "name",
      },
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "部门名称",
      name: "name",
      placeholder: "部门名称",
      colSpan: 24,
      rules: [
        {
          required: true,
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
    },
    {
      type: "text",
      label: "负责人",
      name: "principal",
      placeholder: "负责人",
      colSpan: 24,
    },
    {
      type: "text",
      label: "邮箱",
      name: "email",
      placeholder: "邮箱",
      colSpan: 24,
    },
    {
      type: "text",
      label: "手机号",
      name: "phone",
      placeholder: "手机号",
      colSpan: 24,
    },
  ]);
  const [menuTree, setMenuTree] = useState<Array<string>>([]);
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

  /**
   * 获取tree
   */
  useEffect(() => {
    const list: Array<any> = JSON.parse(
      JSON.stringify(DepartmentStore.listDepartment)
    );
    list.unshift({
      id: 0,
      name: "一级菜单",
    });

    setMenuTree(list);
    return () => {
      setMenuTree([]);
    };
  }, []);

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

export default EditDepartment;
