

export interface IAtFormItem {
    label?: string;
    name?: string;
    type?: string;
    rules?: Array<any>;
    initialValue?: any;
    options?: Array<any>;
    placeholder?: string;
    disabled?: boolean;
    hidden?: boolean;
    colSpan?: number;
    style?: any;
    wrapperCol?: {
        span: number;
        offset: number
    };
    render?: any;
    renderFormItem?: (form: any) => any;
    onChange?: any;
    showTime?: any;                                                          // 展示时间插件
    format?: string;                                                         // 时间插件格式
    picker?: any;                                                            // 时间插件类型
    treeData?: Array<any>                                                    // 树结构数据
    treeValue?: Array<any>                                                   // 树结构默认值
    multiple?: boolean;                                                      // 多选
    fieldNames?: any;                                                        // treeSelect
    min?: number;
    max?: number;
}

export interface IAtForm {
    form: any;
    initialValues?: any;                                                    // 表单默认值
    formItems: Array<IAtFormItem>;                                          // 表单项
    layout: any;                                                            // 表单布局
    wrapperCol?: {
        span?: number;
        offset?: number
    };
    labelCol?: {
        span?: number;
        offset?: number
    },
    style?: any;
    autoComplete?: string;                                                   // 自动填写
    onFinish?: (values: any) => void;                                        // 表单提交
    onFinishFailed?: (errorInfo: any) => void;                               // 表单提交失败
    onValuesChange?: (changedValues: any, allValues: any) => void;           // 表单值改变
    onFieldsChange?: (changedFields: any, allFields: any) => void;           // 表单字段改变
    treeData?: Array<any>                                                    // 树结构数据
    treeValue?: Array<any>                                                   // 树结构默认值
    footer?: any;                                                             // 默认false，或传递react组件
    min?: number;
    max?: number;
}

