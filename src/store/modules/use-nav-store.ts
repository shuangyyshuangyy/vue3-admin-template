import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    foldFlag: false, //控制是否折叠
    refresh: 0, //控制刷新
  }),
  getters: {},
  actions: {},
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
});
