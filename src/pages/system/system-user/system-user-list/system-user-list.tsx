import React from 'react'
import { Form, Input, Select, TreeSelect } from 'antd'

import { Button, FilterForm, Panel, Table } from '@/components'
import { BasePreviewLink } from '@/lib'
import { departmentList, StatusEnum } from '../define.ts'

interface FormItem {
  name?: string
  account?: string
  phone?: string
  mail?: string
  /** 全部,启用,禁用 */
  status?: '0' | '1' | '2',
  createTime?: string
}

interface DataType {
  id?: number
  account?: string
  name?: string
}

const SystemUserList = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()
  const [data, setData] = React.useState<DataType[]>()

  const columns = $.utils.ant.AntTableColumns([
    {
      dataIndex: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'account',
      title: '账号',
    }, {
      dataIndex: 'mail',
      title: '邮箱',
    }, {
      dataIndex: 'phone',
      title: '手机号',
    }, {
      dataIndex: 'status',
      title: '状态',
    }, {
      dataIndex: 'createTime',
      title: '创建时间',
      valueType:'date'
    },
    {
      dataIndex: 'control',
      title: '操作',
      width: 80,
      fixed: 'right',
      render: (_, record) => {
        return <BasePreviewLink to={`/system/user/detail/${record.account}`}>编辑</BasePreviewLink>
      },
    },
  ])

  React.useEffect(() => {
    setData([
      {
        id: 1,
        account: '1',
        name: '站',
        createTime:1731140382
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
          <Form.Item name="mail" label="邮箱">
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="status" label="状态">
            <Select placeholder="请选择" options={$.utils.enumToOptions(StatusEnum)} allowClear
                    style={{ width: 180 }} />
          </Form.Item>
          <Form.Item name="departmenId" label="部门">
            <TreeSelect
              showSearch
              placeholder="请选择"
              allowClear
              style={{ width: 180 }}
              treeData={departmentList}
            />
          </Form.Item>
        </FilterForm>
      </Panel.Item>

      <Panel.Item
        className="mt-20"
        rightNodes={
          <div>
            <BasePreviewLink to={'/system/user/add'}>
              <Button ghost type={'primary'}>
                新增
              </Button>
            </BasePreviewLink>
          </div>
        }
      >
        <Table columns={columns} dataSource={data} style={{ width: '100%' }} className={'mt-16'} />
      </Panel.Item>
    </Panel>
  )
}

export default SystemUserList
