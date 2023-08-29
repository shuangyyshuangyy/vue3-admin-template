//用户相关的小仓库
import { defineStore } from 'pinia';
import type { loginData, loginResponse } from '@/api/user/type';
import { reqLogin } from '@/api/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '', //localStorage.getItem('TOKEN'),
  }),

  getters: {},

  actions: {
    async login(data: loginData) {
      const result: loginResponse = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        // localStorage.setItem('TOKEN', this.token);
        return '欢迎回来';
      } else {
        return Promise.reject(result.data.message);
      }
    },
  },
  persist: true,
});
