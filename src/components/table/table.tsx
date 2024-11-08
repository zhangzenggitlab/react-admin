import { Table as AntTable, TableColumnProps as AntTableColumnProps, TableProps as AntTableProps } from 'antd'

export interface TableProps extends AntTableProps {
  key?: string
}

export interface TableColumnProps extends AntTableColumnProps {
  key?: string
}

export const Table = (props: TableProps) => {
  const { size = 'small', rowKey = 'id', ...prop } = props

  return <AntTable size={size} rowKey={rowKey} {...prop} />
}
