import { FilterForm, Panel, Table } from '@/components'
import { Form, Input, TableColumnProps } from 'antd'

interface FormItem {
  name?: string
  account?: string
}

const SystemUser = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()

  const columns: TableColumnProps[] = [{
    dataIndex: 'name',
    title: '姓名',
  }]

  console.log($.usePagination)

  console.log(_TITLE_)
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

      <Panel.Item className="mt-20">
        <Table columns={columns} className="mt-16" />
      </Panel.Item>
    </Panel>
  )
}

export default SystemUser
