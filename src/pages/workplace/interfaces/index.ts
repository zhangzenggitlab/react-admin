export interface IDataSource {
    key: number | string;
    sort: number | string;
    keyWord: string;
    userNums: number;
    increase: number;
   
}

export interface IColumns {
    title: string;
    dataIndex: string;
    key: string;
    render?:(a:any)=>{}
}
