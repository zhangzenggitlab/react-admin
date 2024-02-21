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
import { getMenu, editMenu, addMenu, delMenu } from "./api";
import MenuStore from "@/mobx/system/menu";
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
      name: "name",
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
      dataIndex: "name",
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
      dataIndex: "type",
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
              setMenuForm({
                parentId: record.id,
                key: "",
                icon: "",
                path: "",
                menu: "",
                name: "",
                hideMenu: 1,
                type: 1,
                permission: "",
                status: 1,
                sort: 1,
              });
            }}
          >
            新增子菜单
          </Button>

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
            onConfirm={() => {
              console.log(record);
              delMenu({ id: record.id }).then(() => {
                getMenufn();
              });
            }}
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
  const [menuForm, setMenuForm] = useImmer<IMenu>({
    icon: "",
    key:"",
    path: "",
    name: "",
    hideMenu: 1,
    type: 1, // 1:目录 2:菜单 3:按钮
    permission: "",
  });

  const editMenuFormRef = useRef<any>(null);
  const formRef = useRef<any>(null);

  const getMenufn = async () => {
    setLoading(true);
    const val = formRef.current.getFormValue();
    getMenu(Object.assign(val, { page, pageSize }))
      .then((res) => {
        setDataSoruce(res.data.data);
        setTotal(res.data.total);
      })
      .finally(() => {
        setLoading(false);
        setOpenDrawer(false);
      });
  };

  const onFinish = () => {
    setPage(1);
    getMenufn();
  };

  const addMenufn = async (menu: IMenu) => {
    await addMenu(menu);
    MenuStore.getAllMenuTree();
    getMenufn();
  };

  const edtMenufn = async (menu: IMenu) => {
    await editMenu(menu);

    MenuStore.getAllMenuTree();
    getMenufn();
  };

  useEffect(() => {
    getMenufn();
  }, [page, pageSize]);

  useEffect(() => {
    MenuStore.getAllMenuTree();

    return () => {
      setDataSoruce([]);
      MenuStore.menuTree = [];
    };
  }, []);

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
                  name: "",
                  hideMenu: 1,
                  type: 1,
                  permission: "",
                  status: 1,
                  sort: 1,
                });
              }}
            >
              新增菜单
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined
                onClick={() => {
                  getMenufn();
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
        onChange={(curre1: number, size: number) => {
          setPage(curre1);
          setPagesize(size);
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
                    if (menuForm.id) {
                      result.id = menuForm.id;
                      edtMenufn(result);
                      return;
                    }
                    addMenufn(result);
                    //
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
