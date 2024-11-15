import { Form, Input, Select, TreeSelect } from 'antd'
import { departmentList, StatusEnum } from '@/pages/system/system-user/define.ts'
import React from 'react'
import { BaseModal, Options } from '@/components'

interface FormItem extends UserEntity.User {
}

interface BeforeProps {
  /**
   * 编辑需要使用id
   */
  id?: string
}

export class SystemUserAdd extends BaseModal<BeforeProps> {
  options: Options = {
    title: '新增',
    onOk:async ()=>{
      return new Promise(resolve => {
        setTimeout(()=>{
          console.log(11)
          resolve()
        },1000)
      })
    }
  }

  render() {
    const [form] = Form.useForm<FormItem>()

    return (<Form form={form}>
      <Form.Item name="name" label="姓名">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="account" label="账号">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="mail" label="邮箱">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="status" label="状态">
        <Select placeholder="请选择" options={$.utils.enumToOptions(StatusEnum)} allowClear
                style={{ width: 180 }} />
      </Form.Item>
      <Form.Item name="departmenId" label="部门">
        <TreeSelect
          showSearch
          placeholder="请选择"
          allowClear
          style={{ width: 180 }}
          treeData={departmentList}
        />
      </Form.Item>
    </Form>)
  }
}

export const systemUserAdd = new SystemUserAdd()
