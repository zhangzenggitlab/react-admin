import { TableColumnProps } from 'antd'
import type * as React from 'react'
import { RenderedCell } from 'rc-table/lib/interface'

export interface AntTableColumnsProps<T = Record<string, any>> extends Omit<TableColumnProps, 'render'> {
  /**
   * 日期类型则进行格式化
   * date:完整显示
   * day：精确到天
   * year:精确到年
   * mouth:精确到月
   */
  valueType?: 'date' | 'day' | 'year' | 'mouth'
  render?: (value: any, record: T, index: number) => React.ReactNode | RenderedCell<any>;
}

/**
 * AntTableColumn 处理
 * @param columns
 * @constructor `
 */
export const AntTableColumns = <T>(columns: AntTableColumnsProps<T>[]): AntTableColumnsProps<T>[] => {
  const column: AntTableColumnsProps<T>[] = []

  for (const e of columns) {
    if (e.render) {
      column.push({
        ...e,
        render: (value, record: T, index) => e.render?.(value, record, index),
      })
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

/**
 * 根据valueType格式化日期
 * @param type
 * @param str
 */
export function returnByValueType(type: AntTableColumnsProps['valueType'], str: number): string {
  let val = '-'

  switch (type) {
    case 'date':
      val = $.utils.tool.formatDate(str, 'YYYY-MM-dd hh:mm:ss')
      break
    case 'day':
      val = $.utils.tool.formatDate(str, 'YYYY-MM-dd')
      break
    case 'mouth':
      val = $.utils.tool.formatDate(str, 'YYYY-MM')
      break
    case 'year':
      val = $.utils.tool.formatDate(str, 'YYYY')
      break
    default:
      break
  }

  return val
}

/**
 * 过滤treeSelect筛选
 * @param inputValue
 * @param treeNode
 */
export function filterTreeNode(inputValue, treeNode) {
  return treeNode.title.indexOf(inputValue) > -1
}