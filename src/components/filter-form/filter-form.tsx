import React from 'react'
import clsx from 'clsx'
import { Form, FormProps as AntFormProps } from 'antd'
import { css } from '@emotion/css'

import { Button } from '@/components'

export interface FormProps extends AntFormProps {
  children?: React.ReactNode
  /** 查询按钮 */
  onSearch?: () => void
  /** 行高 */
  rowHeight?: number
}

const DEFINE = {
  rowHeight: 32,
}

export const FilterForm = (props: FormProps) => {
  const { rowHeight = DEFINE.rowHeight, children } = props
  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  return (
    <div
      className={clsx(filterForm, 'flex start-x ovh p-x-24 p-y-4 width ovh relative form')}
      style={{ height: collapsed ? rowHeight + 'px' : 'auto' }}
    >
      <Form {...props} className="filter-form flex gap-24 wrap">
        {children}
      </Form>

      <div className={clsx(collapsed ? filterForm : 'absolute filter-form-control', 'flex gap-10')}>
        <Button
          type="primary"
          onClick={() => {
            props.onSearch?.()
          }}
        >
          查询
        </Button>
        <Button
          onClick={() => {
            props.form?.resetFields()
          }}
        >
          重置
        </Button>

        <Button
          type="link"
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        >
          {collapsed ? '展开' : '收起'}
        </Button>
      </div>
    </div>
  )
}

const filterForm = css`
  .filter-form-control {
    right: 24px;
    bottom: 4px;
  }
`
