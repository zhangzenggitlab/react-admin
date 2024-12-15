import { BaseModal, OptionsType } from '@/components'
import React from 'react'
import { Form, TreeSelect } from 'antd'

type ModalProps = {
  id?: string | number
}

type FormItem = UserEntity.User // todo

export class SetRoleMenuModal extends BaseModal<ModalProps> {
  options: OptionsType = {
    title: '菜单权限',
    onOk: async()=>{
      return this.submit()
    },
  }

  render(): React.ReactNode {
    const [form] = Form.useForm<FormItem>()
    const [options, setOptions] = React.useState<RoleApi.RoleAllResVo[]>([])

    function getAllRole() {
      $.api.role.all().then(res => {
        setOptions(res)
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

    return <Form form={form}>
      <Form.Item name="menuIds" label="菜单" rules={[{ required: true }]}>
        <TreeSelect showSearch placeholder="请选择" fieldNames={{ value: 'id', label: 'name' }}
                    filterTreeNode={$.utils.ant.filterTreeNode} allowClear
                    treeData={options} multiple />
      </Form.Item>
    </Form>
  }
}

export const setRoleMenuModal = new SetRoleMenuModal()