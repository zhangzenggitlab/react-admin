interface IMenu {
    key: string;                  // 菜单唯一标识(填写组件路径)
    path: string;                 // 路由地址(等同于key)
    name?: string;
    menu?: string;                // 菜单标识(父菜单key)
    Component?: any;              // 组件 
    icon?: any;                   // 图标
    label: string                 // 显示标题
    children?: Array<IMenu>       // 子菜单
    redirect?: string;            // 重定向地址
    hideMenu?: boolean;           // 是否显示菜单
    type: number;                 // 菜单类型 1:目录 2:菜单 3:按钮
    permission?: string;          // 权限标识

}

export default IMenu;