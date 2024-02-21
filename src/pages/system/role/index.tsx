import React, { useEffect, useState, useRef } from "react";
import { Tooltip, Flex, Space, Button, Popconfirm, Tree, message } from "antd";
import { useImmer } from "use-immer";
import {
  getRole,
  editRole,
  addRole,
  delRoleById,
  menuRoleByRoleId,
  addMenuRole,
} from "./api";
import { getMenuTree } from "@/api/menu";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import AtTable from "@/components/at-table";
import IRole from "./interface";
import AtDrawer from "@/components/at-drawer";
import EditRole from "./editRole";
import AtModel from "@/components/at-model/AtModel";

function Role() {
  const [editRoleId, setEditRoleId] = useImmer<number>(0);
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
    // {
    //   title: "是否默认",
    //   dataIndex: "status",
    //   align: "center",
    //   render: (text: number) =>
    //     text == 1 ? <Tag color="cyan">是 </Tag> : <Tag color="red">否</Tag>,
    // },
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
              setEditRoleId(record.id);
              menuRoleByRoleId({ roleId: record.id }).then((res: any) => {
                console.log(res.data);
                setSelectedKey(res.data);
                setOpenModel(true);
              });
            }}
          >
            权限
          </Button>

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
              delRoleById({ id: record.id }).then(() => {
                message.success("删除成功");
                getRolefn();
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
  const [treeData, setTreeData] = useImmer<Array<any>>([]);
  const [total, setTotal] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useImmer<Array<number>>([2]);
  const editFormRef = useRef<any>(null);
  const [menuIds, setMenuIds] = useImmer<Array<number>>([]);

  const getRolefn = async () => {
    setLoading(true);
    getRole({
      page,
      pageSize,
    })
      .then((res: any) => {
        setDataSoruce(res.data.data);
        setTotal(res.data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMenuTree().then((res) => {
      setTreeData(res.data);
    });
  }, []);

  useEffect(() => {
    getRolefn();

    return () => {
      setDataSoruce([]);
    };
  }, [page, pageSize]);

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
                  getRolefn();
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
                    if (editForm.id) {
                      editRole(
                        Object.assign(editFormRef.current.getFormValue(), {
                          id: editForm.id,
                        })
                      ).then(() => {
                        getRolefn();
                        setOpenDrawer(false);
                      });
                      return;
                    }

                    addRole(val).then(() => {
                      setOpenDrawer(false);
                      getRolefn();
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
          addMenuRole({
            roleId: editRoleId,
            menuIds: menuIds,
          });
          setOpenModel(false);
        }}
        onCancel={() => {
          setOpenModel(false);
        }}
      >
        <Tree
          checkable
          checkedKeys={selectedKey}
          onCheck={(checkedKeys: any, info: any) => {
            setSelectedKey(checkedKeys);
            const idx = info.checkedNodes.map((item: any) => {
              return item.id;
            });
            idx.push(...info.halfCheckedKeys);
            setMenuIds(idx);
          }}
          treeData={treeData}
          multiple={true}
          fieldNames={{
            key: "id",
            title: "name",
          }}
        />
      </AtModel>
    </div>
  );
}

export default Role;
