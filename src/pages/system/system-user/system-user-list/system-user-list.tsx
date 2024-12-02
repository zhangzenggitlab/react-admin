import { Dropdown, Form, Input, Popconfirm, Select, Tag, TreeSelect } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { Button, FilterForm, Panel, Table } from '@/components'
import { StatusEnum } from '../define.ts'
import { setUserRoleModal, systemUserAdd } from '../modal'

type FormItem = Omit<UserApi.UserListParams, 'pageSize' | 'page'>

type ColumnsType = UserApi.UserListResVo

interface BeforeProps {
  departmentList: DepartmentApi.DepartmentAllResVo[]
}

const SystemUserList: BaseFc<BasePage, BeforeProps> = (props) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<ColumnsType>([
    {
      dataIndex: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'account',
      title: '账号',
    },
    {
      dataIndex: 'phone',
      title: '手机号',
    },
    {
      dataIndex: 'mail',
      title: '邮箱',
    },
    {
      dataIndex: 'status',
      title: '状态',
      render: (status) => {
        return <Tag
          color={StatusEnum.启用 == status ? 'green' : 'red'}>{StatusEnum.启用 == status ? '启用' : '禁用'}</Tag>
      },
    },
    {
      dataIndex: 'createTime',
      title: '创建时间',
      valueType: 'date',
    },
    {
      dataIndex: 'control',
      title: '操作',
      width: 160,
      fixed: 'right',
      render: (_, record) => {
        return (
          <div className={'flex gap-10'}>
            <a
              onClick={() => {
                systemUserAdd.open({
                  form: record,
                }).then(() => onRefresh())
              }}
            >
              编辑
            </a>
            <Popconfirm
              title="提示"
              description="确定删除?"
              onConfirm={() => {
                $.api.user.deleteUser({ id: record.id }).then(() => onRefresh())
              }}
            >
              <a>删除</a>
            </Popconfirm>

            <Dropdown
              menu={{
                items: [
                  {
                    label: '分配角色',
                    key: '1',
                    onClick: () => {
                      setUserRoleModal.open({
                        userId: record.id,
                      }).then(() => onRefresh())
                    },
                  },
                ],
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <EllipsisOutlined />
              </a>
            </Dropdown>
          </div>
        )
      },
    },
  ])

  const { getData, data, loading } = $.hooks.useHttp($.api.user.userList, {})

  const {
    page,
    pageSize,
    setTotal,
    pagination,
    onRefresh,
  } = $.hooks.usePagination(getTableData)

  async function getTableData() {
    const values = form.getFieldsValue()

    getData(
      {
        page,
        pageSize,
        ...values,
      }).then((res) => {
      setTotal(res.total)
    })
  }

  return (
    <Panel title={props.title}>
      <Panel.Item className="mt-20">
        <FilterForm form={form} onSearch={getTableData} onReset={getTableData}>
          <Form.Item name="name" label="姓名">
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item name="account" label="账号">
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item name="phone" label="手机号码">
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item name="mail" label="邮箱">
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item name="status" label="状态">
            <Select
              placeholder="请选择"
              options={$.utils.tool.enumToOptions(StatusEnum)}
              allowClear
              style={{ width: 180 }}
            />
          </Form.Item>
          <Form.Item name="departmenId" label="部门">
            <TreeSelect showSearch placeholder="请选择" fieldNames={{ value: 'id', label: 'name' }}
                        filterTreeNode={$.utils.ant.filterTreeNode} treeNodeFilterProp="label" allowClear
                        style={{ width: 180 }} treeData={props.departmentList} />
          </Form.Item>
        </FilterForm>
      </Panel.Item>

      <Panel.Item
        className="mt-20"
        rightNodes={
          <Button
            ghost
            type={'primary'}
            onClick={() => {
              systemUserAdd.open().then(() => onRefresh())
            }}
          >
            新增
          </Button>
        }
      >
        <Table style={{ width: '100%' }} rowKey={'id'} className={'mt-16'} columns={columns}
               dataSource={data.data || []}
               pagination={pagination} loading={loading} />
      </Panel.Item>
    </Panel>
  )
}

SystemUserList.beforeEnter = async () => {
  const departmentList = await $.api.department.all()

  return {
    departmentList,
  }
}

export default SystemUserList
