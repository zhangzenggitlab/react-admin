import { action, observable, runInAction } from 'mobx';
import IDepartment from "@/interfaces/IDepartment";
import { allDepartment } from "@/pages/system/department/api"

class DepartmentStore {

    @observable listDepartment: Array<IDepartment> = [];
    @action async init() {
        runInAction(() => {
            allDepartment().then((res: any) => {
                if (res.code === 200) {
                    this.listDepartment = res.data;
                }
            })
        })
    }

    @action clear() {
        this.listDepartment = [];
    }

}

export default new DepartmentStore();