import { FilterForm } from '@/components'
import { Form,Input } from 'antd'

interface FormItem {
  name: string
}

const UserList= () => {
  const [form] = Form.useForm<FormItem>()

  return (
    <FilterForm form={form}>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
      <Form.Item name='name' label='姓名' rules={[{required:true}]}>
        <Input placeholder='请输入'/>
      </Form.Item>
    </FilterForm>
  )
}

export default UserList
