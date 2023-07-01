import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    token: "",
  }),
  actions: {
    logout() {
      this.token = "";
      // localStorage.removeItem('token')
    },
  },
});
