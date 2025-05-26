import { defineStore } from 'pinia';
import { registerUser } from '../api/fakeApi';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async registration(formData) {
      const res = await registerUser(formData);
      this.user = res.data;
    },
    async getUser() {
      // fakestoreapi не поддерживает получение по ID, только registration
      // Здесь можно эмулировать
      return this.user;
    },
  },
});
