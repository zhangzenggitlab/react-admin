import React from 'react'
import { Dropdown, Form, Input, Popconfirm, Select, Tag, TreeSelect } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { Button, FilterForm, Panel, Table } from '@/components'
import { departmentList, StatusEnum } from '../define.ts'
import { systemUserAdd } from '../modal'

type FormItem = UserEntity.User

const SystemUserList = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<FormItem>([
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
                })
              }}
            >
              编辑
            </a>
            <Popconfirm
              title="提示"
              description="确定删除?"
              onConfirm={() => {
                console.log(11)
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

  const { getData, data, loading } = $.hooks.useHttp($.api.userList, {})
  const { setTotal, pagination } = $.hooks.usePagination(getTableData)

  async function getTableData() {
  }

  React.useEffect(() => {
    getData().then((res) => {
      setTotal(res)
    })
  }, [])

  return (
    <Panel title={props.title}>
      <Panel.Item className="mt-20">
        <FilterForm form={form}>
          <Form.Item name="name" label="姓名">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="account" label="账号">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="phone" label="手机号码">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="mail" label="邮箱">
            <Input placeholder="请输入" />
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
            <TreeSelect showSearch placeholder="请选择" filterTreeNode={(inputValue, treeNode) =>
              treeNode.data.props.label.indexOf(inputValue) !== -1} treeNodeFilterProp="label" allowClear
                        style={{ width: 180 }} treeData={departmentList} />
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
              systemUserAdd.open()
            }}
          >
            新增
          </Button>
        }
      >
        <Table style={{ width: '100%' }} className={'mt-16'} columns={columns} dataSource={data.data || []}
               pagination={pagination} loading={loading} />
      </Panel.Item>
    </Panel>
  )
}

export default SystemUserList
