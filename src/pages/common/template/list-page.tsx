import { Form, Input } from 'antd'
import React from 'react'

import { FilterForm, Panel, Table } from '@/components'

export interface FormItem {
  name: string
}

interface SystemMenuProps {
  title: string
}

interface ColumnsProps {
}

const SystemMenu: React.FC<SystemMenuProps> = ({ title }) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<ColumnsProps>([])

  const { getData, data, loading } = $.hooks.useHttp(async (): Promise<any> => {
  }, {}, true)
  const { page, pageSize, setTotal, onSearch,pagination } = $.hooks.usePagination(getData)

  function getFilterFormData() {
    const values = form.getFieldsValue()

    return {
      ...values,
      page,
      pageSize,
    }
  }

  React.useEffect(() => {
    const params = getFilterFormData()

    getData().then(res => {
      setTotal(res?.total || 0)
    })
  }, [])

  return <>
    <Panel title={title}>
      <Panel.Item className="mt-20">
        <FilterForm form={form} onSearch={onSearch}>
          <Form.Item name={'name'} label={'姓名'}>
            <Input placeholder={'请输入'} />
          </Form.Item>
        </FilterForm>
      </Panel.Item>

      <Panel.Item className="mt-20">
        <Table columns={columns} dataSource={data?.data || []} loading={loading} pagination={pagination}/>
      </Panel.Item>
    </Panel>
  </>
}

export default SystemMenu
