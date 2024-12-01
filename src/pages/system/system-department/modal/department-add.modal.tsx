import React from 'react'
import { Form, Input, InputNumber, TreeSelect } from 'antd'

import { BaseModal, OptionsType } from '@/components'

type ModalProps = {
  id?: number
  form?: Partial<FormItem>
}
type FormItem = DepartmentApi.DepartmentAddVo

export class DepartmentAddModal extends BaseModal<ModalProps> {
  options: OptionsType = {
    title: '新增',
    width: 650,
    onOk: this.ok.bind(this),
  }

  async ok() {
    return this.submit()
  }

  render() {
    const [form] = Form.useForm<FormItem>()
    const { getData,data, loading } = $.hooks.useHttp($.api.department.all, [], true)

    this.submit = async () => {
      await form.validateFields()
      const value = form.getFieldsValue()

      if (this.props?.id) {
        return $.api.department.update(value)
      }

      return $.api.department.add(value)
    }

    React.useEffect(() => {
      getData()
    }, [])

    return <Form form={form} className={'grid'} labelCol={{ style: { width: 60 } }} initialValues={this.props?.form}>
      <div className={'grid col-2 gap-x-20'}>
        <Form.Item name={'parentId'} label={'父级'} rules={[{ required: true }]}>
          <TreeSelect showSearch placeholder="请选择"
                      filterTreeNode={$.utils.ant.filterTreeNode}
                      treeNodeFilterProp="label" allowClear
                      style={{ width: 220 }}
                      treeData={[{id:0,name:"一级部门"},...data]}
                      loading={loading}
                      fieldNames={{ value: 'id', label: 'name' }} />
        </Form.Item>
        <Form.Item name={'name'} label={'名称'} rules={[{ required: true }]}>
          <Input placeholder={'请输入'} style={{ width: 220 }} allowClear />
        </Form.Item>
        <Form.Item name={'sort'} label={'排序'} rules={[{ required: true }]}>
          <InputNumber placeholder={'请输入'} style={{ width: 220 }} min={1} />
        </Form.Item>
        <Form.Item name={'remark'} label={'备注'}>
          <Input.TextArea placeholder={'请输入'} />
        </Form.Item>
      </div>
    </Form>
  }
}

export const departmentAddModal = new DepartmentAddModal