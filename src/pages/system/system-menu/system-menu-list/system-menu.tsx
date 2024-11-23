import React from 'react'

import { Dropdown, Form, Input, Popconfirm } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { Button, FilterForm, Panel, Table, Tag } from '@/components'
import { menuModal } from '../modal'

type FormItem = MenuApi.MenuListParams


interface SystemMenuProps {
  title: string
}

const SystemMenu: React.FC<SystemMenuProps> = ({ title }) => {
  const [form] = Form.useForm<FormItem>()
  const columns = $.utils.ant.AntTableColumns<MenuEntity.menu>([{
    dataIndex: 'name',
    title: '名称',
  }, {
    dataIndex: 'type',
    title: '类型',
    render: (val) => {
      return <>
        <Tag type={'error'}>
          {val === $.enumData.menuEnum.MenuTypeEnum.菜单 ? '菜单' : '按钮'}
        </Tag>
      </>
    },
  }, {
    dataIndex: 'sort',
    title: '排序',
  }, {
    dataIndex: 'permission',
    title: '权限标识',
  }, {
    dataIndex: 'id',
    title: '操作',
    fixed: 'right',
    width: 160,
    render: (_, record) => {
      return <div className="flex gap-8">
        <a onClick={() => {
          menuModal.open({
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
                  menuModal.open({
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

  const { getData, data, loading } = $.hooks.useHttp($.api.menu.menuList, {}, true)
  const { page, pageSize, setTotal, onSearch, pagination } = $.hooks.usePagination(getData)

  function getFilterFormData(): MenuApi.MenuListParams {
    const values = form.getFieldsValue()

    return {
      ...values,
      page,
      pageSize,
    }
  }

  React.useEffect(() => {
    const params = getFilterFormData()
    getData(params).then(res => {
      setTotal(res?.total || 0)
    })
  }, [])

  return <>
    <Panel title={title}>
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
            menuModal.open()
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

export default SystemMenu
