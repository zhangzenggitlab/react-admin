import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import AtForm from "@/components/at-form";
import { useImmer } from "use-immer";
import { Form } from "antd";
import RoleStore from "@/mobx/system/role";

const EditRole = forwardRef((props: any, ref: any) => {
  const [roleForm] = Form.useForm<any>();
  const [layout] = useImmer<string>("vertical");
  const [formItems] = useImmer<Array<any>>([
    {
      type: "treeSelect",
      label: "父级角色",
      name: "parentId",
      placeholder: "父级角色",
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
      type: "text",
      label: "角色名称",
      name: "name",
      placeholder: "角色名称",
      colSpan: 24,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      type: "text",
      label: "角色标识",
      name: "permission",
      placeholder: "角色标识",
      rules: [
        {
          required: true,
        },
      ],
      colSpan: 24,
    },
    {
      type: "text",
      label: "角色描述",
      name: "description",
      placeholder: "角色描述",
      colSpan: 24,
    },
    {
      type: "select",
      label: "是否默认",
      name: "status",
      style: { width: 200 },
      placeholder: "是否默认",
      rules: [
        {
          required: true,
        },
      ],
      options: [
        {
          label: "是",
          value: 1,
        },
        {
          label: "否",
          value: 2,
        },
      ],
    },
  ]);
  const editUserFormRef = useRef<any>();

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
      getFormValue: editUserFormRef.current.getFormValue,
      validateFields: editUserFormRef.current.validateFields,
    };
  });

  return (
    <AtForm
      ref={editUserFormRef}
      form={roleForm}
      formItems={formItems}
      layout={layout}
      footer={false}
    ></AtForm>
  );
});

export default EditRole;
