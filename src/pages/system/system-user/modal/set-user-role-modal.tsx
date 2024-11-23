import { BaseModal, OptionsType } from '@/components'
import React from 'react'
import { Form,TreeSelect } from 'antd'

type SetUserRoleModalProps = {
  id: string | number
}

type FormItem = UserEntity.User

export class SetUserRoleModal extends BaseModal<SetUserRoleModalProps> {
  options: OptionsType = {
    title: '设置权限',
  }

  async ok() {
    return this.submit()
  }

  submit() {
  }

  render(): React.ReactNode {
    const [form] = Form.useForm<FormItem>()
    const [options, setOptions] = React.useState<RoleApi.RoleAllRes[]>([])

    function getAllRole() {
      $.api.role.roleAll().then(res => {
        setOptions([...res])
      })
    }

    this.submit = async () => {
      await form.validateFields()
      const value = form.getFieldsValue()
      console.log(value)
      return Promise.reject()
    }

    React.useEffect(() => {
      getAllRole()
    }, [])

    return <Form form={form} labelCol={{ span: 3 }}>
      <Form.Item name="roids" label="角色" rules={[{ required: true }]}>
        <TreeSelect showSearch placeholder="请选择" fieldNames={{ value: 'id', label: 'name' }}
                    filterTreeNode={$.utils.ant.filterTreeNode} allowClear
                    treeData={options} multiple />
      </Form.Item>
    </Form>
  }
}

export const setUserRoleModal = new SetUserRoleModal()