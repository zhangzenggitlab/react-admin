import React, { useEffect, useState, useRef } from "react";
import { Tooltip, Flex, Space, Tag, Button, Popconfirm, Tree } from "antd";
import { useImmer } from "use-immer";
import { getRole, editRole } from "./api";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import AtTable from "@/components/at-table";
import IRole from "./interface";
import AtDrawer from "@/components/at-drawer";
import EditRole from "./editRole";
import AtModel from "@/components/at-model/AtModel";

function Role() {
  const [columns] = useImmer<Array<any>>([
    {
      title: "角色名称",
      dataIndex: "name",
      align: "center",
    },

    {
      title: "角色标识",
      dataIndex: "permission",
      align: "center",
    },
    {
      title: "角色描述",
      dataIndex: "description",
      align: "description",
    },
    {
      title: "是否默认",
      dataIndex: "status",
      align: "center",
      render: (text: number) =>
        text == 1 ? <Tag color="cyan">是 </Tag> : <Tag color="red">否</Tag>,
    },
    {
      title: "操作",
      dataIndex: "control",
      align: "center",
      render: (text: any, record: any, index: number) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              setSelectedKey(record.menu);
              console.log(text);
              setOpenModel(true);
            }}
          >
           权限
          </Button>

<<<<<<< HEAD
       
=======
          <Button
            type="link"
            onClick={() => {
              setOpenDrawer(true);
              setEditForm({
                name: "",
                permission: "",
                status: 2,
                parentId: record.id,
              });
            }}
          >
            添加子角色
          </Button>

>>>>>>> 771c49629394f6ff0e74c9597324313bc76335e7
          <Button
            type="link"
            onClick={() => {
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
              setDataSoruce((draf) => {
                draf.splice(index, 1);
              });
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
  const [dataSource, setDataSoruce] = useImmer<Array<any>>([]); // 菜单列表
  const [loading, setLoading] = useImmer<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPagesize] = useState<number>(10);
  const [search, setSearch] = useState({
    page,
    pageSize,
  });
  const [justify] = useState<string>("space-between");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [editForm, setEditForm] = useImmer<any>({
    id: 0,
    name: "",
    permission: "",
    status: 1,
    parentId: 0,
  });
  const [treeData] = useImmer<Array<any>>([
    {
      id: 1,
      label: "系统管理",
      children: [
        {
          id: 2,
          label: "用户列表",
          children: [
            {
              id: 5,
              label: "查询接口",
            },
            {
              id: 6,
              label: "删除接口",
            },
          ],
        },
        {
          id: 3,
          label: "菜单列表",
        },
        {
          id: 4,
          label: "角色列表",
        },
      ],
    },
  ]);
  const [total, setTotal] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useImmer<Array<number>>([2]);
  const editFormRef = useRef<any>(null);

  useEffect(() => {
    setLoading(true);
    getRole(search).then((res: any) => {
      setTimeout(() => {
        setDataSoruce(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
      }, 200);
    });

    return () => {
      setDataSoruce([]);
    };
  }, [search]);

  return (
    <div className="default-contant">
      <Flex gap="middle" align="start" vertical className="flex-box">
        <Flex justify={justify}>
          <span>查询表格</span>
          <Space size={"large"}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setOpenDrawer(true);
                setEditForm({
                  name: "",
                  permission: "",
                  status: 2,
                  parentId: 0,
                });
              }}
            >
              新增角色
            </Button>
            <Tooltip title="刷新">
              <ReloadOutlined
                onClick={() => {
                  setSearch({
                    page,
                    pageSize,
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
          setPage(page);
          setPagesize(pageSize);
          setSearch({
            page,
            pageSize,
          });
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
                editFormRef.current
                  .validateFields()
                  .then((val: IRole) => {
                    if (val.id) {
                      editRole(editFormRef.current.getFormValue()).then(
                        (res: any) => {
                          console.log(res);
                        }
                      );
                      return;
                    }

                    editRole(val).then((res: any) => {
                      setDataSoruce((draf) => {
                        res.id = draf.length + 1;
                        draf.push(res);
                      });
                      setOpenDrawer(false);
                    });
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
        <EditRole
          formData={editForm}
          footer={false}
          ref={editFormRef}
        ></EditRole>
      </AtDrawer>

      <AtModel
        open={openModel}
        title="菜单权限"
        onOk={() => {
          setOpenModel(false);
        }}
        onCancel={() => {
          setOpenModel(false);
        }}
      >
        <Tree
          checkable
          checkedKeys={selectedKey}
          onCheck={(checkedKeys: any) => {
            setSelectedKey(checkedKeys);
          }}
          treeData={treeData}
          multiple={true}
          fieldNames={{
            key: "id",
            title: "label",
          }}
        />
      </AtModel>
    </div>
  );
}

export default Role;
