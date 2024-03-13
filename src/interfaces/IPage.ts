interface IPage {
    total?: number;
    pageSize?:number;
    current?: number;
    onChange?: () => void;
}

export default IPage;