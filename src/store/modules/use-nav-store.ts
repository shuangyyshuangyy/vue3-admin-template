import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    foldFlag: false, //控制是否折叠
    refresh: 0, //控制刷新
    fullScrenen: false, //控制是否全屏
  }),
  getters: {},
  actions: {},
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
});
