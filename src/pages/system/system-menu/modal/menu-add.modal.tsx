import React from 'react'
import { Form, Input, Select, InputNumber } from 'antd'

import { BaseModal, OptionsType } from '@/components'

type MenuAddProps = {
  id?: string
}

type FormItem = {
  name: string
}

export class MenuAddModal extends BaseModal<MenuAddProps> {
  options: OptionsType = {
    title: '新增',
    onOk: this.ok.bind(this),
  }

  async ok() {
    return this.submit()
  }

  async submit() {
  }


  render(): React.ReactNode {
    const [form] = Form.useForm<FormItem>()

    this.submit = async () => {
      await form.validateFields()
      const value = form.getFieldsValue()

      console.log(value)

      return Promise.reject()
    }
    return <Form form={form}>
      <Form.Item name={'name'} label={'名称'} rules={[{ required: true }]}>
        <Input placeholder={'请输入'} />
      </Form.Item>
      <Form.Item name={'type'} label={'类型'} rules={[{ required: true }]}>
        <Select placeholder={'请选择'} options={$.utils.tool.enumToOptions($.enumData.menuEnum.MenuTypeEnum)} />
      </Form.Item>
      <Form.Item name={'sort'} label={'排序'} rules={[{ required: true }]}>
        <InputNumber placeholder={'请输入'} />
      </Form.Item>
    </Form>
  }
}

export const menuModal = new MenuAddModal()