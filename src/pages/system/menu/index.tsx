import "./index.scss";
import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Space,
  Tag,
  Button,
  Drawer,
  Divider,
  Popconfirm,
  Flex,
  Tooltip,
} from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { useImmer } from "use-immer";
import { IAtFormItem } from "@/interfaces/IAtForm";
import { getMenu, editMenu } from "./api";
import ISearch from "./interface";
import EditMenu from "./editMenu";
import AtTable from "@/components/at-table";
import IMenu from "@/interfaces/IMenu";
import AtForm from "@/components/at-form";

function Menu() {
  const [form] = Form.useForm<any>();
  const [formItems] = useImmer<Array<IAtFormItem>>([
    {
      type: "text",
      label: "菜单名称",
      name: "label",
      placeholder: "菜单名称(模糊查询)",
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
  const [layout] = useImmer<string>("inline");
  const [columns] = useImmer<Array<any>>([
    {
      title: "菜单名称",
      dataIndex: "label",
      align: "center",
    },
    {
      title: "图标",
      dataIndex: "icono",
      align: "center",
    },
    {
      title: "排序",
      dataIndex: "sort",
      align: "center",
    },
    {
      title: "权限标识",
      dataIndex: "permission",
      align: "center",
    },
    {
      title: "类型",
      dataIndex: "status",
      align: "center",
      render: (text: any) => {
        if (text == 1) {
          return <Tag color="#f50">目录</Tag>;
        }
        if (text == 2) {
          return <Tag color="#2db7f5">菜单</Tag>;
        }
        if (text == 3) {
          return <Tag color="#87d068">按钮</Tag>;
        }
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "center",
      render: (text: any) =>
        text.status == 1 ? (
          <Tag color="cyan">启用</Tag>
        ) : (
          <Tag color="red">禁用</Tag>
        ),
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
              setMenuForm(record);
            }}
          >
            编辑
          </Button>
          <Popconfirm
            title="提示"
            description="确认删除?"
            onConfirm={() => {}}
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
  const [dataSource, setDataSoruce] = useImmer<Array<IMenu>>([]); // 菜单列表
  const [loading, setLoading] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [justify] = useState<string>("space-between");
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPagesize] = useState<number>(10);
  const [search, setSearch] = useState<ISearch>({
    page,
    pageSize,
  });
  const [menuForm, setMenuForm] = useImmer<IMenu>({
    key: "",
    icon: "",
    path: "",
    menu: "",
    label: "",
    hideMenu: false,
    type: 1, // 1:目录 2:菜单 3:按钮
    permission: "",
  });

  const editMenuFormRef = useRef<any>(null);
  const formRef = useRef<any>(null);
  const edtMenufn = async (menu: IMenu) => {
    await editMenu(menu);
    setOpenDrawer(false);
  };

  useEffect(() => {
    const getDatafn = async () => {
      setLoading(true);
      const res: any = getMenu();
      setTimeout(() => {
        setDataSoruce(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
      }, 200);
    };
    getDatafn();
    return () => {
      setDataSoruce([]);
    };
  }, [search]);

  const onFinish = (values: any) => {
    setSearch({
      page,
      pageSize,
      name: values.name,
      status: values.status,
    });
  };
  return (
    <div className="default-contant">
      <AtForm
        form={form}
        formItems={formItems}
        layout={layout}
        ref={formRef}
        onFinish={onFinish}
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
                setMenuForm({
                  key: "",
                  icon: "",
                  path: "",
                  menu: "",
                  label: "",
                  hideMenu: false,
                  type: 1,
                  permission: "",
                });
              }}
            >
              新增菜单
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined
                onClick={() => {
                  const val = formRef.current.getFormValue();
                  setSearch(val);
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

      {/* 新增编辑 */}
      <Drawer
        open={openDrawer}
        width={700}
        onClose={() => {
          setOpenDrawer(false);
        }}
        footer={
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                editMenuFormRef.current
                  .validateFields()
                  .then((result: IMenu) => {
                    edtMenufn(result);
                  })
                  .catch((err: any) => {
                    console.log(err);
                  });
              }}
            >
              确定
            </Button>
          </Space>
        }
      >
        <EditMenu
          formData={menuForm}
          footer={false}
          ref={editMenuFormRef}
        ></EditMenu>
      </Drawer>
    </div>
  );
}

export default Menu;
