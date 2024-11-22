import { TableColumnProps } from 'antd'
import type * as React from 'react'
import { RenderedCell } from 'rc-table/lib/interface'

export interface AntTableColumnsProps<T = any> extends Omit<TableColumnProps, 'render'> {
  /**
   * 日期类型则进行格式化
   * date:完整显示
   * day：精确到天
   * year:精确到年
   * mouth:精确到月
   */
  valueType?: 'date' | 'day' | 'year' | 'mouth' | 'mm' | 'ss'
  render?: (value: any, record: T, index: number) => React.ReactNode | RenderedCell<any>;
}

/**
 * AntTableColumn 处理
 * @param columns  AntDesign->Table配置
 * T 泛型一般传递render第二个参数对象的ts类型
 */
export const AntTableColumns = <T>(columns: AntTableColumnsProps<T>[]) => {
  const column: AntTableColumnsProps[] = []

  for (const e of columns) {
    if (e.render) {
      column.push({
        ...e,
        render: (value, record, index) => e.render?.(value, record, index),
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
    case 'mm':
      val = $.utils.tool.formatDate(str, 'YYYY-MM-dd hh:mm')
      break
    case 'ss':
      val = $.utils.tool.formatDate(str, 'YYYY-MM-dd hh:mm')
      break
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
export function filterTreeNode(inputValue: string, treeNode: any) {
  return treeNode.title.indexOf(inputValue) > -1
}