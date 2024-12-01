import { Dropdown, Form, Input, Popconfirm } from 'antd'

import { FormItem } from '@/pages/common/template/list-page.tsx'
import { Button, FilterForm, Panel, Table } from '@/components'
import { roleAddModal, setRoleMenuModal } from '../modal'
import { EllipsisOutlined } from '@ant-design/icons'

type ColumnsProps = RoleApi.RoleListResVo

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
            id: record.id,
          }).then(() => onRefresh())
        }}>编辑</a>
        <Popconfirm
          title="提示"
          description="确定删除?"
          onConfirm={() => {
            $.api.role.deleteRole({ id: record.id }).then(() => onRefresh())
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
                  }).then(() => onRefresh())
                },
              }, {
                label: '菜单权限',
                key: '2',
                onClick: () => {
                  setRoleMenuModal.open({
                    id: record.id,
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

  const { getData, data, loading } = $.hooks.useHttp($.api.role.roleList, {}, true)
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
    <Panel title={props.title}>
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
            roleAddModal.open().then(() => onRefresh())
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