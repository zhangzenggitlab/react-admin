import { Dropdown, Form, Input, Popconfirm } from 'antd'
import React from 'react'

import { FormItem } from '@/pages/common/template/list-page.tsx'
import { Button, FilterForm, Panel, Table } from '@/components'
import { roleAddModal } from '../modal'
import { EllipsisOutlined } from '@ant-design/icons'

type ColumnsProps = RoleEntity.role

const SystemRoleList = (props: BasePage) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<ColumnsProps>([{
    dataIndex: 'name',
    title: '名称',
  }, {
    dataIndex: 'permission',
    title: '权限码',
  }, {
    dataIndex: 'sort',
    title: '排序',
  }, {
    dataIndex: 'remark',
    title: '备注',
  }, {
    dataIndex: 'id',
    title: '操作',
    width: 160,
    render: (_, record) => {
      return <div className="flex gap-8">
        <a onClick={() => {
          roleAddModal.open({
            form: record,
          })
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
                  roleAddModal.open({
                    form: { parentId: record.id },
                  })
                },
              }, {
                label: '菜单权限',
                key: '2',
                onClick: () => {
                  roleAddModal.open({
                    form: { parentId: record.id },
                  })
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

  const { getData, data, loading } = $.hooks.useHttp($.api.role.roleList, {}, true)
  const { page, pageSize, setTotal, onSearch, pagination } = $.hooks.usePagination(getData)

  function getFilterFormData() {
    const values = form.getFieldsValue()

    return {
      ...values,
      page,
      pageSize,
    }
  }

  React.useEffect(() => {
    const params: any = getFilterFormData()

    getData(params).then(res => {
      setTotal(res?.total || 0)
    })
  }, [])

  return <>
    <Panel title={props.title}>
      <Panel.Item className="mt-20">
        <FilterForm form={form} onSearch={onSearch}>
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
            roleAddModal.open()
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

export default SystemRoleList