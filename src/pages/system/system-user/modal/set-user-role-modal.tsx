import { BaseModal, OptionsType } from '@/components'
import React from 'react'
import { Form, TreeSelect } from 'antd'

type SetUserRoleModalProps = {
  userId: number
}

type FormItem = UserRoleApi.UserRoleUpdateVo // todo

export class SetUserRoleModal extends BaseModal<SetUserRoleModalProps> {
  options: OptionsType = {
    title: '设置权限',
    onOk:this.ok.bind(this)
  }

  async ok() {
    return this.submit()
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
      const { roleIds } = form.getFieldsValue()
      console.log(roleIds)
      return $.api.userRole.update({
        userId: this.props?.userId,
        roleIds:roleIds
      })
    }

    React.useEffect(() => {
      getAllRole()
      if (this.props?.userId) {
        $.api.userRole.getRoleByUserId({ userId: this.props?.userId }).then(res => {
          form.setFieldsValue({
            'roleIds': res,
          })
        })
      }
    }, [])

    return <Form form={form} labelCol={{ span: 3 }}>
      <Form.Item name="roleIds" label="角色" rules={[{ required: true }]}>
        <TreeSelect showSearch placeholder="请选择" fieldNames={{ value: 'id', label: 'name' }}
                    filterTreeNode={$.utils.ant.filterTreeNode} allowClear
                    treeData={options} multiple />
      </Form.Item>
    </Form>
  }
}

export const setUserRoleModal = new SetUserRoleModal()