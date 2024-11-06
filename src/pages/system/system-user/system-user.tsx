import { FilterForm, Panel } from '@/components'
import { Form, Input } from 'antd'

interface FormItem {
  name?: string
  account?: string
}

const SystemUser = (props: RouterConfig) => {
  const [form] = Form.useForm<FormItem>()

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

      <Panel.Item className="mt-20" title="表格"></Panel.Item>
    </Panel>
  )
}

export default SystemUser
