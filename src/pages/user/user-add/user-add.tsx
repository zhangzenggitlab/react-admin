import { Table, TableColumnProps } from '@/components/table'

interface BeforeProps {
  id: string
}

interface PageParams {
  detail?: number
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
  age: '2',
}]


const UserAdd: BaseFc<BeforeProps, PageParams> = () => {
  return <Table columns={columns} dataSource={data}>UserAdd</Table>
}

export default UserAdd
