import { Form, Input } from 'antd'
import React from 'react'

import { Button, FilterForm, Panel, Table } from '@/components'
import { BasePreviewLink } from '@/lib'

interface FormItem {
  name?: string
  account?: string
}

interface DataType {
  id?: number
  account?: string
  name?: string
}

const SystemUserList = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()
  const [data, setData] = React.useState<DataType[]>()

  const columns = $.ant.AntTableColumns([{
    dataIndex: 'name',
    title: '姓名',
  }, {
    dataIndex: 'account',
    title: '账号',
  }, {
    dataIndex: 'control',
    title: '操作',
    width: 80,
    fixed: 'right',
    render: (_, record) => {
      return <BasePreviewLink to={`/system/user/detail/${record.account}`}>编辑</BasePreviewLink>
    },
  }])

  React.useEffect(() => {
    setData([{
      id: 1,
      account: '1',
      name: '站',
    }])
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
        </FilterForm>
      </Panel.Item>

      <div><BasePreviewLink to={'/system/user/add'}> <Button>新增</Button></BasePreviewLink></div>
      <Panel.Item className="mt-20">
        <Table columns={columns} className="mt-16" dataSource={data} />
      </Panel.Item>
    </Panel>
  )
}

export default SystemUserList
