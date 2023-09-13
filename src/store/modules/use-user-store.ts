//用户相关的小仓库
import { defineStore } from 'pinia';
import type {
  loginData,
  loginResponse,
  userInfoResponse,
} from '@/api/user/type';
import { reqLogin, reqUserInfo } from '@/api/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    username: '',
    avatar: '',
  }),

  getters: {},

  actions: {
    async login(data: loginData) {
      const result: loginResponse = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        return '欢迎回来';
      } else {
        return Promise.reject(result.data.message);
      }
    },

    async getUserInfo() {
      const result: userInfoResponse = await reqUserInfo();
      if (result.code === 200) {
        this.username = result.data.checkUser?.username as string;
        this.avatar = result.data.checkUser?.avatar as string;
      }
    },

    userLogout() {
      this.token = '';
      this.username = '';
      this.avatar = '';
    },
  },
  //当state中的值发生改变时，localStorage或sessionStorage才会更新,默认会保存到localStorage
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
});
