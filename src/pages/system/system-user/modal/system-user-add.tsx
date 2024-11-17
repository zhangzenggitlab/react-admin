import { Form, Input, Select, TreeSelect } from 'antd'

import { BaseModal, Options } from '@/components'
import { departmentList, StatusEnum } from '@/pages/system/system-user/define.ts'

type FormItem = UserEntity.User

interface BeforeProps {
  id?: string
  form: FormItem
}

export class SystemUserAdd extends BaseModal<BeforeProps> {
  options: Options = {
    title: '新增',
    onOk: this.ok.bind(this),
  }

  async ok() {
    return this.submit()
  }

  submit() {
  }

  render() {
    const [form] = Form.useForm<FormItem>()

    this.submit = async () => {
      const values = form.getFieldsValue()
      console.log(values)
      return
    }

    return (
      <Form form={form} labelCol={{ span: 3 }}>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="account" label="账号" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="mail" label="邮箱">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="status" label="状态" rules={[{ required: true }]}>
          <Select placeholder="请选择" allowClear options={$.utils.tool.enumToOptions(StatusEnum)} />
        </Form.Item>
        <Form.Item name="departmenId" label="部门" rules={[{ required: true }]}>
          <TreeSelect showSearch placeholder="请选择" filterTreeNode={$.utils.ant.filterTreeNode} allowClear
                      treeData={departmentList} />
        </Form.Item>
      </Form>
    )
  }
}

export const systemUserAdd = new SystemUserAdd()