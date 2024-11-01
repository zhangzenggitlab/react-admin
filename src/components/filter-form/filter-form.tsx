import React from 'react'
import { Form, FormProps as AntFormProps } from 'antd'
import clsx from 'clsx'
import { css } from '@emotion/react'

import { Button } from '@/components'

export interface FormProps extends AntFormProps {
  children?: React.ReactNode
  /** 查询按钮 */
  onSearch?: () => void
}

export const FilterForm = (props: FormProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  return <div className={clsx(formClass, 'flex start-x ovh p-x-24 p-y-4 width')}>
    <Form {...props} className="filter-form flex gap-24 wrap" >{props.children}</Form>

    <div className="flex gap-10">
      <Button type="primary" onClick={() => {
        props.onSearch?.()
      }}>查询</Button>
      <Button onClick={() => {
        props.form?.resetFields()
      }}>重置</Button>

      <Button type="link" onClick={() => {
        setCollapsed(!collapsed)
      }}> {collapsed ? '展开' : '收起'}</Button>
    </div>
  </div>
}

const formClass = css`
    .ant-form-item{
        margin-bottom: 0;
    }
    
    .filter-form{
        margin-top: 44px;
    }
`