import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    foldFlag: false,
  }),
  getters: {},
  actions: {},
  persist: true,
});
