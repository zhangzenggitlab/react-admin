import React from 'react'
import { Form, Input, InputNumber, TreeSelect } from 'antd'

import { BaseModal, OptionsType } from '@/components'

type RoleAddModalProps = {
  form?: any
}

type FormItem = {
  name: string
}

export class RoleAddModal extends BaseModal<RoleAddModalProps> {
  options: OptionsType = {
    title: '新增',
    width: 650,
    onOk: this.ok.bind(this),
  }

  async ok() {
    return this.submit()
  }

  async submit() {
  }

  render() {
    const [form] = Form.useForm<FormItem>()
    const [options, setOptions] = React.useState<RoleApi.RoleAllRes[]>([])
    const { getData, loading } = $.hooks.useHttp($.api.role.roleAll, [], true)
    this.submit = async () => {
      await form.validateFields()
      const value = form.getFieldsValue()
      console.log(value)
      return Promise.reject()
    }

    React.useEffect(() => {
      getData().then(res => {
        setOptions([{ id: '0', name: '一级角色' }, ...res])
      })
    }, [])

    return <Form form={form} className={'grid'} labelCol={{ style: { width: 60 } }} initialValues={this.props?.form}>
      <div className={'grid col-2 gap-x-20'}>
        <Form.Item name={'parentId'} label={'父级'} rules={[{ required: true }]}>
          <TreeSelect showSearch placeholder="请选择"
                      filterTreeNode={(inputValue, treeNode) => $.utils.ant.filterTreeNode(inputValue, treeNode)}
                      treeNodeFilterProp="label" allowClear
                      style={{ width: 220 }}
                      treeData={options}
                      loading={loading}
                      fieldNames={{ value: 'id', label: 'name' }} />
        </Form.Item>
        <Form.Item name={'name'} label={'名称'} rules={[{ required: true }]}>
          <Input placeholder={'请输入'} style={{ width: 220 }} allowClear />
        </Form.Item>
        <Form.Item name={'sort'} label={'排序'} rules={[{ required: true }]}>
          <InputNumber placeholder={'请输入'} style={{ width: 220 }} min={1} />
        </Form.Item>
        <Form.Item name={'permission'} label={'权限码'} rules={[{ required: true }]}>
          <Input placeholder={'请输入'} style={{ width: 220 }} allowClear />
        </Form.Item>
        <Form.Item name={'remark'} label={'备注'} rules={[{ required: true }]}>
          <Input.TextArea placeholder={'请输入'} />
        </Form.Item>
      </div>
    </Form>
  }
}

export const roleAddModal = new RoleAddModal()