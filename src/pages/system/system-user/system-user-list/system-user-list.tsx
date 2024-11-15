import React from 'react'
import { Dropdown, Form, Input, Popconfirm, Select, Tag, TreeSelect } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { Button, FilterForm, Panel, Table } from '@/components'
import { BasePreviewLink } from '@/lib'
import { departmentList, StatusEnum } from '../define.ts'
import { systemUserAdd } from '../modal'

interface FormItem extends UserEntity.User {
}

const SystemUserList = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()
  const [data, setData] = React.useState<Partial<FormItem>[]>()

  const columns = $.utils.ant.AntTableColumns([
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
    }, {
      dataIndex: 'mail',
      title: '邮箱',
    },
    {
      dataIndex: 'status',
      title: '状态',
      render: (status) => {

        return <Tag color={StatusEnum.启用 ? 'green' : 'red'}>{StatusEnum.启用 ? '启用' : '禁用'}</Tag>
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
            <BasePreviewLink to={`/system/user/detail/${record.account}`}>编辑</BasePreviewLink>
            <Popconfirm
              title="提示"
              description="确定删除?"
              onConfirm={() => {
                console.log(11)
              }}
            >
              <a>删除</a>
            </Popconfirm>

            <Dropdown menu={{
              items: [{
                label: '分配角色',
                key: '1',
              }],
            }}>
              <a onClick={(e) => e.preventDefault()}>
                <EllipsisOutlined />
              </a>
            </Dropdown>

          </div>
        )
      },
    },
  ])

  React.useEffect(() => {
    setData([
      {
        id: 1,
        account: '1',
        name: '站',
        status: '1',
        createTime: 1731140382,
      },
    ])
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
              options={$.utils.enumToOptions(StatusEnum)}
              allowClear
              style={{ width: 180 }}
            />
          </Form.Item>
          <Form.Item name="departmenId" label="部门">
            <TreeSelect showSearch placeholder="请选择" allowClear style={{ width: 180 }} treeData={departmentList} />
          </Form.Item>
        </FilterForm>
      </Panel.Item>

      <Panel.Item
        className="mt-20"
        rightNodes={
          <div>
            <Button ghost type={'primary'} onClick={() => {
              systemUserAdd.open({

              })
            }}>
              新增
            </Button>
          </div>
        }
      >
        <Table columns={columns} dataSource={data} style={{ width: '100%' }} className={'mt-16'} />
      </Panel.Item>
    </Panel>
  )
}

export default SystemUserList
