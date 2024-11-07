import { TableColumnProps } from 'antd'

/**
 * AntTableColumn 处理
 * @param columns
 * @constructor
 */
export const AntTableColumns = <T extends TableColumnProps>(columns: T[]): T[] => {
  return columns
}