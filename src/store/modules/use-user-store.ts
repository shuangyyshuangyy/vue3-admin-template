//用户相关的小仓库
import { defineStore } from 'pinia';
import type { loginData } from '@/api/user/type';
import { reqLogin } from '@/api/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('TOKEN'),
  }),

  getters: {},

  actions: {
    async login(data: loginData) {
      const result = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data.token || '';
        localStorage.setItem('TOKEN', this.token);
        return '登录成功';
      } else {
        return Promise.reject(result.data.message);
      }
    },
  },
});
