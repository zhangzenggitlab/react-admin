import { action, observable, runInAction } from 'mobx';
import IRole from "@/pages/system/role/interface";
import { allRole } from "@/pages/system/role/api";

class RoleStore {
    @observable allTree: Array<IRole> = [];

    @action async getAllTree() {
        runInAction(() => {
            allRole().then((res: any) => {
                if (res.code === 200) {
                    // res.data.unshift({
                    //     id: 0,
                    //     name: "一级角色",
                    // });
                    this.allTree = res.data;
                    console.log(res.data);
                    localStorage.setItem("roleTree", JSON.stringify(this.allTree));
                }
            })
        })
    }



    @action.bound update = async (roleList: Array<IRole>): Promise<any> => {
        runInAction(() => {
            this.allTree = roleList;
        });
    }


    @action clear() {
        this.allTree = [];
    }
}


export default new RoleStore();