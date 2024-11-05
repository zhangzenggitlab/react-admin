import { Table, TableColumnProps } from '@/components/table'
import { usePagination } from '@/hooks'

interface BeforeProps {
  id: string
}

interface PageParams {
  detail?: number
  location: { state: any }
  title?:string
}

const columns: TableColumnProps[] = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '操作',
  render: (_, record) => {
    return <a onClick={() => {
      console.log(record)
    }}>删除</a>
  },
}]

const data = [{
  id: 1,
  name: 'name',
  age: '1',
}, {
  id: 2,
  name: 'name2',
}]

const UserAdd: BaseFc<BeforeProps, PageParams> = () => {
  const { pagination } = usePagination()

  return <Table columns={columns} dataSource={data} pagination={pagination}>UserAdd</Table>
}

export default UserAdd
