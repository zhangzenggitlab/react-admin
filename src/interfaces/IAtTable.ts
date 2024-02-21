export interface IColumn {
    title: string
    width?: number
    align?: string
    className?: string
    fixed?: string | boolean
    key?: string
    dataIndex?: string
    render?: (text: any, record: any, index: number) => any;
}

interface IAtTable {
    dataSource: Array<any>;
    columns: Array<any>;
    bordered?: boolean;
    components?: any;
    footer?: any;
    getPopupContainer?: any;
    loading?: boolean;
    locale?: any;
    pagination?: any;
    rowClassName?: any;
    rowKey?: any;
    rowSelection?: any;
    scroll?: any;
    showHeader?: any;
    showSorterTooltip?: any;
    size?: any;
    sortDirections?: any;
    sticky?: any;
    summary?: any;
    tableLayout?: any;
    title?: any;
    onHeaderRow?: any;
    onRow?: any;
    virtual?: boolean;
    total?: number
    pageSize?: number
    page?: number
    onChange?: (page: number, pageSize: number) => void
}

export default IAtTable;