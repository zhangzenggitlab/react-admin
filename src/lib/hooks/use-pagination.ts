import React from 'react'
import type { PaginationProps, TablePaginationConfig as AntTablePaginationConfig } from 'antd'

type RequestType = () => Promise<any>

export interface PageProps extends PaginationProps {
  /** 立即执行传进来的函数 */
  immediate: boolean
}

interface TablePaginationConfig extends AntTablePaginationConfig {
  onShowSizeChange: PaginationProps['onShowSizeChange']
  showTotal: PaginationProps['showTotal']
  onChange: PaginationProps['onShowSizeChange']
  total: number
  pageSize: number
}

/**
 * 分页
 * @param requestFn 异步请求,加载数据
 * @param config 配置
 */
export const usePagination = (requestFn: RequestType, config?: PageProps) => {


  const [page, setPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [total, setTotal] = React.useState(0)

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, size) => {
    setPage(current)
    setPageSize(size)
    onSearch?.()
  }

  const showTotal: PaginationProps['showTotal'] = (total) => `共 ${total} 条`

  const pagination: TablePaginationConfig = {
    showSizeChanger: true,
    showQuickJumper: true,
    size: 'small',
    onShowSizeChange: onShowSizeChange,
    showTotal: showTotal,
    onChange: onShowSizeChange,
    total,
    pageSize,
  }

  React.useEffect(() => {
    if (config?.immediate) {
      requestFn()
    }
  }, [])

  /** 搜索使用第一页 */
  function onSearch() {
    setPage(1)
    requestFn?.()
  }

  /** 刷新 */
  function onRefresh() {
    requestFn?.()
  }

  return {
    page,
    pageSize,
    pagination,
    onSearch,
    onRefresh,
    setTotal,
    total,
  }
}