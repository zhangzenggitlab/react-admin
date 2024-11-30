import React from 'react'
import { Form, Input, InputNumber, TreeSelect, Radio } from 'antd'

import { BaseModal, OptionsType } from '@/components'

type MenuAddProps = {
  id?: string
  form?: Partial<MenuEntity.menu>
}

type FormItem = {
  name: string
}

export class MenuAddModal extends BaseModal<MenuAddProps> {
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

  render(): React.ReactNode {
    const [form] = Form.useForm<FormItem>()
    const { getData, data, loading } = $.hooks.useHttp($.api.menu.menuAll, {}, true)

    this.submit = async () => {
      await form.validateFields()
      const value = form.getFieldsValue()

      console.log(value)
      return Promise.reject()
    }

    React.useEffect(() => {
      getData()
    }, [])

    return <Form form={form} className={'grid'} labelCol={{ style: { width: 60 } }} initialValues={this.props?.form}>
      <div className={'grid col-2 gap-x-20'}>
        <Form.Item name={'parentId'} label={'父级'} rules={[{ required: true }]}>
          <TreeSelect showSearch placeholder="请选择" filterTreeNode={(inputValue, treeNode) =>
            treeNode.data.props.label.indexOf(inputValue) !== -1} treeNodeFilterProp="label" allowClear
                      style={{ width: 220 }}
                      treeData={[{ id: '0', name: '一级菜单' }, ...data?.data || [{ id: '0', name: '一级菜单' }]]}
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
          <Radio.Group>
            <Radio value={'1'}>菜单</Radio>
            <Radio value={'2'}>按钮</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  }
}

export const menuModal = new MenuAddModal()