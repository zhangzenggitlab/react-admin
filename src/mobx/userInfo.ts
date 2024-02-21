import { action, observable, runInAction, makeObservable } from 'mobx';
import IUser from "@/pages/system/user/interface";
import { getUserInfo, updateUserInfo } from "@/api";

class UserStore {
     constructor() {
          makeObservable(this)
     }

     @observable userInfo: Partial<IUser> = {};
     @action.bound init = async () => {
          runInAction(() => {
               getUserInfo().then(res => {
                    this.userInfo = res.data;
                    localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
               })
          });
     }

     @action.bound update = async (userInfo: Partial<IUser>): Promise<any> => {
          runInAction(() => {
               updateUserInfo(userInfo).then(() => {
                    this.init()
               })
          });
     }

     @action.bound updateLocal = async (userInfo: Partial<IUser>): Promise<any> => {
          runInAction(() => {
               this.userInfo = userInfo;
          });
     }

     @action.bound logout = async (): Promise<any> => {
          this.clear();
          localStorage.removeItem("userInfo");
     }

     @action.bound clear = () => {
          this.userInfo = {
               account: "",
               mail: "",
               phone: "",
               name: "",
               roles: []
          };
     }

}

export default new UserStore();