//用户相关的小仓库
import { defineStore } from 'pinia';
import type { loginData, loginResponse } from '@/api/user/type';
import { reqLogin } from '@/api/user';
import { routes } from '@/router/routes';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    routes,
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
  },
  //当state中的值发生改变时，localStorage或sessionStorage才会更新
  persist: true,
  // persist: {
  //   storage: sessionStorage,
  // },
});
