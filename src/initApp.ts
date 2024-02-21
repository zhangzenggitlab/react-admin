import MenuStore from "@/mobx/system/menu";
import userInfo from "@/mobx/userInfo";
import RoleStore from "@/mobx/system/role";

// 缓存数据到store
const loadStore = () => {
    const menus = localStorage.getItem("menus");
    const userLocal = localStorage.getItem("userInfo");
    const roleTreeLocal = localStorage.getItem("roleTree");

    // 菜单
    if (menus) {
        const menusData = JSON.parse(menus);
        MenuStore.init(menusData);
    }

    // 用户信息
    if (userLocal) {
        const user = JSON.parse(userLocal);
        userInfo.updateLocal(user);
    }

    // 全部角色
    if (roleTreeLocal) {
        const roleTree = JSON.parse(roleTreeLocal);
        RoleStore.update(roleTree);
    } else {
        RoleStore.getAllTree();
    }
}


// (自定义初始化数据)
const init = () => {
    // if (localStorage.getItem("token")) {

    // }
    loadStore();
};

const destory = () => {
    localStorage.removeItem("menus");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    localStorage.removeItem("roleTree");
}


const App = {
    init,
    destory,
}

export default App;