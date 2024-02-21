import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Space,
  Tag,
  Button,
  Popconfirm,
  Divider,
  Flex,
  Tooltip,
  Row,
  Col,
} from "antd";
import { IAtFormItem } from "@/interfaces/IAtForm";
import { IColumn } from "@/interfaces/IAtTable";
import { useImmer } from "use-immer";
import {
  SearchOutlined,
  PlusOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { getUser, editUser, addUser, delUser } from "./api";
import AtTable from "@/components/at-table";
import AtForm from "@/components/at-form";
import EditUser from "./editUser";
import AtDrawer from "@/components/at-drawer";
import IUser from "./interface";
import TreeDepartment from "./treeDepartment";
import "./index.scss";

function User() {
  const [form] = Form.useForm<any>();
  const [initialValues] = useState<any>(); // 表单初始值
  const [formItems] = useImmer<Array<IAtFormItem>>([
    {
      type: "text",
      label: "用户名",
      name: "name",
      placeholder: "用户名(模糊查询)",
    },
    {
      type: "text",
      label: "账号",
      name: "username",
      placeholder: "账号",
    },
    {
      type: "text",
      label: "手机号",
      name: "phone",
      placeholder: "手机号",
    },
    {
      type: "text",
      label: "邮箱",
      name: "mail",
      placeholder: "邮箱",
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      placeholder: "账号状态",
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
    // {
    //   type: "datePicker",
    //   label: "创建时间",
    //   name: "createTime",
    //   placeholder: "创建时间",
    //   format: "YYYY-MM-DD",
    //   showTime: { format: "HH:mm" },
    //   style: { width: "100%" },
    //   colSpan: 6,
    //   onChange: (date: any, dateString: string): void => {
    //     console.log(date, dateString);
    //   },
    // },
  ]);
  const [layout] = useImmer<string>("inline");
  const [userForm, setUserForm] = useImmer<any>({
    name: "",
    account: "",
    mail: "",
    phone: "",
    status: "1",
    roles: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [columns] = useImmer<Array<IColumn>>([
    {
      title: "姓名",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "账号",
      dataIndex: "username",
      align: "center",
    },
    {
      title: "邮箱",
      dataIndex: "mail",
      align: "center",
    },
    {
      title: "手机号",
      dataIndex: "phone",
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
      render: (text: any, record: any) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              console.log(text);
              setOpenDrawer(true);
              setUserForm(record);
            }}
          >
            编辑
          </Button>

          <Popconfirm
            title="提示"
            description="确认删除?"
            onConfirm={async () => {
              await delUser({ id: record.id });
              getUserList();
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
  const [dataSource, setDataSoruce] = useImmer<Array<IUser>>([]); // 用户列表
  const [openDrawer, setOpenDrawer] = useState(false);
  const [justify] = useState<string>("space-between");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPagesize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [departmentId, setDepartmentId] = useState<number>(0);
  const formRef = useRef<any>(null);
  const editUserFormRef = useRef<any>(null);
  const formBtnNode = (
    <Space>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={() => {
          getUserList();
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

  // 查询用户列表
  const getUserList = () => {
    setLoading(true);
    const val = formRef.current.getFormValue();
    getUser(Object.assign({ page, pageSize, departmentId }, val)).then(
      (res: any) => {
        setDataSoruce(res.data.data);
        setTotal(res.data.total);
        setLoading(false);
      }
    ).finally(()=>{
      setLoading(false);
    });
  };

  useEffect(() => {
    getUserList();

    return () => {
      setDataSoruce([]);
    };
  }, [pageSize, page, departmentId]);

  const editUserfn = async (user: IUser) => {
    editUser(user).then(() => {
      setOpenDrawer(false);
      getUserList();
    });
  };

  const addUserfn = async (user: IUser) => {
    addUser(user).then(() => {
      getUserList();
      setOpenDrawer(false);
    });
  };

  return (
    <div className="default-contant">
      <AtForm
        ref={formRef}
        form={form}
        formItems={formItems}
        layout={layout}
        initialValues={initialValues}
        onFinish={onFinish}
        style={{ marginBottom: 20 }}
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
                setOpenDrawer(true);
                setUserForm({
                  name: "",
                  account: "",
                  mail: "",
                  phone: "",
                  status: 1,
                  roles: [],
                });
              }}
            >
              新增用户
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined
                onClick={() => {
                  getUserList();
                }}
              />
            </Tooltip>
          </Space>
        </Flex>
      </Flex>

      <Row>
        <Col span={4}>
          <TreeDepartment
            onSelect={(selectedKeys: Array<number>) => {
              setDepartmentId(selectedKeys[0]);
            }}
          ></TreeDepartment>
        </Col>
        <Col span={20}>
          <AtTable
            columns={columns}
            dataSource={dataSource}
            total={total}
            pageSize={pageSize}
            rowKey="id"
            loading={loading}
            onChange={(current: number, size: number) => {
              setPage(current);
              setPagesize(size);
            }}
          />
        </Col>
      </Row>

      {/* 新增编辑用户 */}
      <AtDrawer
        open={openDrawer}
        width={700}
        onClose={() => {
          setOpenDrawer(false);
        }}
        footer={
          <Space>
            <Button
              type="primary"
              onClick={() => {
                editUserFormRef.current
                  .validateFields()
                  .then((values: IUser) => {
                    if (userForm.id) {
                      values.id = userForm.id;
                      editUserfn(values);
                      return;
                    }
                    addUserfn(values);
                  });
              }}
            >
              确定
            </Button>
          </Space>
        }
      >
        <EditUser
          formData={userForm}
          footer={false}
          ref={editUserFormRef}
        ></EditUser>
      </AtDrawer>
    </div>
  );
}

export default User;
