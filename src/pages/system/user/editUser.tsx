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
import RoleStore from "@/mobx/system/role";

const EditUser = forwardRef((props: any, ref: any) => {
  const [userForm2] = Form.useForm<any>();
  const editUserFormRef = useRef<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems2] = useImmer<Array<any>>([
    {
      type: "treeSelect",
      label: "部门",
      name: "departmentId",
      placeholder: "部门",
      colSpan: 24,
      treeData: DepartmentStore.listDepartment,
      fieldNames: {
        label: "name",
        value: "id",
      },
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "用户名",
      name: "name",
      placeholder: "用户名",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "账号",
      name: "username",
      placeholder: "账号",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "手机号",
      name: "phone",
      placeholder: "手机号",
      colSpan: 24,
    },
    {
      type: "text",
      label: "邮箱",
      name: "mail",
      placeholder: "邮箱",
      colSpan: 24,
    },
    {
      type: "treeSelect",
      label: "角色",
      name: "roles",
      placeholder: "角色",
      multiple: true,
      colSpan: 24,
      treeData: RoleStore.allTree,
      fieldNames: {
        label: "name",
        value: "id",
      },
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
      placeholder: "账号状态",
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
    <AtForm
      ref={editUserFormRef}
      form={userForm2}
      formItems={formItems2}
      layout={layout}
      treeValue={treeValue}
      footer={false}
    ></AtForm>
  );
});

export default EditUser;
