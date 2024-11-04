import React from 'react'
import type { TablePaginationConfig,PaginationProps  } from 'antd'

export interface PageProps extends PaginationProps  {
  /** 搜索 */
  onSearch: () => any
}

export const usePagination = (props?: PageProps) => {
  const [page, setPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [total, setTotal] = React.useState(10)

  const onShowSizeChange: TablePaginationConfig['onShowSizeChange'] = (current, pageSize) => {
    setPage(current)
    setPageSize(pageSize)
    onSearch?.()
  }

  const showTotal: TablePaginationConfig['showTotal'] = (total) => ` ${total} items`

  const pagination = React.useState<TablePaginationConfig>({
    showSizeChanger: true,
    showQuickJumper: true,
    size: 'small',
    onShowSizeChange: { onShowSizeChange },
    showTotal: { showTotal },
    onChange: { onShowSizeChange },
  })

  /** 搜索使用第一页 */
  function onSearch() {
    setPage(1)
  }

  /** 刷新 */
  function onRefresh() {
    props?.onSearch?.()
  }


  return {
    page,
    pageSize,
    pagination,
    onSearch,
    onRefresh,
    setTotal,
    total
  }
}