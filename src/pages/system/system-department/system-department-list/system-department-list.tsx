import React from 'react'
import { Dropdown, Form, Input, Popconfirm } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { Button, FilterForm, Panel, Table } from '@/components'
import { departmentAddModal } from '../modal'

export type FormItem = DepartmentApi.DepartmentListVo

interface SystemDepartmentListProps {
  title: string
}

type ColumnsProps = DepartmentApi.DepartmentListResVo

const SystemDepartmentList: React.FC<SystemDepartmentListProps> = ({ title }) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<ColumnsProps>([{
    dataIndex: 'name',
    title: '名称',
  }, {
    dataIndex: 'sort',
    title: '排序',
  }, {
    dataIndex: 'remark',
    title: '备注',
  }, {
    dataIndex: 'createTime',
    title: '创建时间',
  }, {
    dataIndex: 'id',
    title: '操作',
    fixed: 'right',
    width: 160,
    render: (_, record) => {
      return <div className="flex gap-8">
        <a onClick={() => {
          departmentAddModal.open({
            form: record,
            id:record.id
          }).then(() => onRefresh())
        }}>编辑</a>
        <Popconfirm
          title="提示"
          description="确定删除?"
          onConfirm={() => {
            console.log(11)
          }}
        >
          <a>删除</a>
        </Popconfirm>
        <Dropdown
          menu={{
            items: [
              {
                label: '新增子项',
                key: '1',
                onClick: () => {
                  departmentAddModal.open({
                    form: { parentId: record.id },
                  }).then(() => onRefresh())
                },
              },
            ],
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined />
          </a>
        </Dropdown>
      </div>
    },
  }])

  const { getData, data, loading } = $.hooks.useHttp($.api.department.departmentList, {}, true)
  const { page, pageSize, setTotal, onRefresh, pagination } = $.hooks.usePagination(onSearch)

  async function onSearch() {
    const values = form.getFieldsValue()

    getData({
      ...values,
      page,
      pageSize,
    }).then(res => {
      setTotal(res?.total || 0)
    })
  }


  return <>
    <Panel title={title}>
      <Panel.Item className="mt-20">
        <FilterForm form={form} onSearch={onSearch} onReset={onRefresh}>
          <Form.Item name={'name'} label={'名称'}>
            <Input placeholder={'请输入'} />
          </Form.Item>
        </FilterForm>
      </Panel.Item>

      <Panel.Item className="mt-20" rightNodes={
        <Button
          ghost
          type={'primary'}
          onClick={() => {
            departmentAddModal.open().then(() => onRefresh())
          }}
        >
          新增
        </Button>
      }>
        <Table className={'mt-16'} columns={columns} dataSource={data?.data || []} loading={loading}
               pagination={pagination} />
      </Panel.Item>
    </Panel>
  </>
}

export default SystemDepartmentList
