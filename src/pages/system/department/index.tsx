import React, { useEffect, useState, useRef } from "react";
import { useImmer } from "use-immer";
import {
  Form,
  Space,
  Button,
  Divider,
  Tag,
  Popconfirm,
  Flex,
  Tooltip,
} from "antd";
import { IAtFormItem } from "@/interfaces/IAtForm";
import {
  SearchOutlined,
  PlusOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { IColumn } from "@/interfaces/IAtTable";
import { getDepartment, editDepartment, addDepartment ,delDepartmentById} from "./api";
import ISearch from "./interface";
import IDepartment from "@/interfaces/IDepartment";
import EditDepartment from "./editDepartment";
import AtTable from "@/components/at-table";
import AtForm from "@/components/at-form";
import AtDrawer from "@/components/at-drawer";

function Department() {
  const [layout] = useImmer<string>("inline");
  const [initialValues] = useState<any>(); // 表单初始值
  const formRef = useRef<any>(null);
  const [form] = Form.useForm<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formItems] = useImmer<Array<IAtFormItem>>([
    {
      type: "text",
      label: "部门名称",
      name: "name",
      placeholder: "部门名称",
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      placeholder: "状态",
      options: [
        {
          label: "全部",
          value: 0,
        },
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
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPagesize] = useState<number>(10);
  const [search, setSearch] = useState<ISearch>({
    page,
    pageSize,
    name: "",
    status: 0,
  });
  const [columns] = useImmer<Array<IColumn>>([
    {
      title: "部门名称",
      dataIndex: "name",
      align: "center",
    },

    {
      title: "状态",
      dataIndex: "status",
      align: "center",
      render: (text) =>
        text == 1 ? <Tag color="cyan">启用</Tag> : <Tag color="red">禁用</Tag>,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      align: "center",
    },
    {
      title: "操作",
      dataIndex: "control",
      align: "center",
      render: (text, record) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              console.log(text);
              setEditForm(record);
              setOpenDrawer(true);
            }}
          >
            编辑
          </Button>

          <Popconfirm
            title="提示"
            description="确认删除?"
            onConfirm={() => {
              delDepartmentById({id:record.id}).then(()=>{
                getDepartmentfn();
              })
            }}
            onCancel={() => {}}
            okText="是"
            cancelText="否"
          >
            <Button type="link">删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataSource, setDataSoruce] = useImmer<Array<IDepartment>>([]);
  const [total, setTotal] = useState<number>(0);
  const [justify] = useState<string>("space-between");
  const editFormRef = useRef<any>(null);
  const [editForm, setEditForm] = useState<any>({
    id: 0,
    name: "",
    status: 1,
    parentId: 0,
  });
  const formBtnNode = (
    <Space>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={() => {
          const val = formRef.current.getFormValue();
          setPage(1);
          setSearch({
            page,
            pageSize,
            name: val.name,
            status: val.status,
          });
        }}
      >
        搜索
      </Button>
      <Button
        onClick={() => {
          form.resetFields();
        }}
      >
        重置
      </Button>
    </Space>
  );

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const getDepartmentfn = async () => {
    getDepartment(search)
      .then((res: any) => {
        setDataSoruce(res.data.data);
        setTotal(res.data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getDepartmentfn();
    return () => {
      setDataSoruce([]);
    };
  }, [page, pageSize, search]);

  return (
    <div className="default-contant">
      <AtForm
        ref={formRef}
        form={form}
        formItems={formItems}
        layout={layout}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
        footer={formBtnNode}
      ></AtForm>

      <Divider></Divider>

      <Flex gap="middle" align="start" vertical className="flex-box">
        <Flex justify={justify}>
          <span>查询表格</span>
          <Space size={"large"}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setEditForm({
                  id: 0,
                  name: "",
                  state: 1,
                  parentId: 0,
                });
                setOpenDrawer(true);
              }}
            >
              新增部门
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined
                onClick={() => {
                  const val = formRef.current.getFormValue();
                  setSearch({
                    page,
                    pageSize,
                    name: val.name,
                    status: val.status,
                  });
                }}
              />
            </Tooltip>
          </Space>
        </Flex>
      </Flex>

      <AtTable
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        loading={loading}
        total={total}
        pageSize={pageSize}
        onChange={(page: number, pageSize: number) => {
          const val = formRef.current.getFormValue();
          setPage(page);
          setPagesize(pageSize);
          setSearch({ page, pageSize, name: val.name, status: val.status });
        }}
      />

      <AtDrawer
        open={openDrawer}
        width={500}
        onClose={() => {
          setOpenDrawer(false);
        }}
        footer={
          <Space>
            <Button
              type="primary"
              onClick={() => {
                editFormRef.current.validateFields().then((res: any) => {
                  if (editForm.id) {
                    res.id = editForm.id;
                    editDepartment(res).then(() => {
                      getDepartmentfn();
                      setOpenDrawer(false);
                    });

                    return;
                  }
                  addDepartment(res).then((res) => {
                    console.log(res);
                    setOpenDrawer(false);
                  });
                });
              }}
            >
              确定
            </Button>
          </Space>
        }
      >
        <EditDepartment
          formData={editForm}
          footer={false}
          ref={editFormRef}
        ></EditDepartment>
      </AtDrawer>
    </div>
  );
}

export default Department;
