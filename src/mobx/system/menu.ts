import { action, observable, runInAction, configure } from 'mobx';
import { lazy } from "react";
import { loadAntIconByName } from '@/utils/antLoad';
import { getRouter } from "@/api/index";
import IMenu from '@/interfaces/IMenu';
import { addRouter } from "@/router/router";
import { getMenuTree } from "@/api/menu";

// 菜单管理
class MenuStore {
    constructor() {
        configure({ enforceActions: "always" });
    }

    @observable menu: Array<IMenu> = [];                // 左侧菜单
    @observable menuTree: Array<IMenu> = [];            // 全部菜单tree

    /*
     * 初始化菜单
     */

    @action async init(menus: Array<IMenu>): Promise<any> {
        runInAction(() => {
            const leftAsideMenu: Array<IMenu> = [];
            const menu = this.recursionMenu(menus, leftAsideMenu);
            this.menu = menu ? menu : [];
        })
    }

    @action async getAllMenuTree(): Promise<any> {
        runInAction(() => {
            getMenuTree().then((res: any) => {
                if (res.code == 200) {
                    this.menuTree = res.data;
                }
            });
        })
    }

    @action clear() {
        this.menu = [];
        this.menuTree = [];
    }

    @action async getRouters(): Promise<any> {
        // 获取路由信息
        getRouter().then((res: any) => {
            if (res.code == 200) {
                localStorage.setItem("menus", JSON.stringify(res.data));
                this.init(res.data);
            }
        });
    }

    /**
     * 递归把返回的菜单注册进路由
     * @param menu 
     */
    recursionMenu(menus: Array<IMenu>, leftAsideMenu: Array<any>): Array<IMenu> {
        if (!menus) {
            return []
        }

        for (let i = 0; i < menus.length; i++) {
            const iterator = menus[i];
            const children: any = iterator.children;

            // 菜单类型则导入组件
            if (iterator.type == 2) {
                // iterator.path = iterator.key;
                const path = `pages${iterator.key}`;
                iterator.Component = lazy(() => import(`/src/${path}`));
                addRouter(iterator);
            }

            if (iterator.icon) {
                iterator.icon = loadAntIconByName(iterator.icon);
            }

            if (children && children.length > 0) {
                const child = this.recursionMenu(children, []);
                iterator.children = child;
            }

            leftAsideMenu.push({
                path: iterator.path,
                label: iterator.label,
                icon: iterator.icon,
                key: iterator.key,
                type: iterator.type,
                children: iterator.children,
                menu: iterator.menu,
            });
        }

        return leftAsideMenu;
    }
}


export default new MenuStore();