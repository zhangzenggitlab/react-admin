import { TableColumnProps } from 'antd'

export interface AntTableColumnsProps extends TableColumnProps {
  /**
   * 日期类型则进行格式化
   * date:完整显示
   * day：精确到天
   * year:精确到年
   * mouth:精确到月
   */
  valueType?: 'date' | 'day' | 'year' | 'mouth'
}

/**
 * AntTableColumn 处理
 * @param columns
 * @constructor
 */
export const AntTableColumns = <T extends AntTableColumnsProps>(columns: T[]): T[] => {
  const column: T[] = []

  for (const e of columns) {
    if (e.render) {
      column.push(e)
    }

    if (!e.render) {
      column.push({
        ...e,
        render: (val) => {
          if (!val) return '-'
          if (e.valueType) return returnByValueType(e.valueType, val)
          return val
        },
      })
    }

  }

  return column
}


function returnByValueType(type: AntTableColumnsProps['valueType'], str: number): string {
  let val = '-'
  switch (type) {
    case 'date':
      val = $.utils.formatDate(str, 'YYYY-MM-dd hh:mm:ss')
      break
    case 'day':
      val = $.utils.formatDate(str, 'YYYY-MM-dd')
      break
    case 'mouth':
      val = $.utils.formatDate(str, 'YYYY-MM')
      break
    case 'year':
      val = $.utils.formatDate(str, 'YYYY')
      break
    default:
      break
  }

  return val
}