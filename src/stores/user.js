import { defineStore } from 'pinia';
import { registerUser } from '../api/fakeApi';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
    isLoading: false,
  }),
  actions: {
    async registration(formData, router) {
      this.isLoading = true;
      this.error = null;
      try {
      const res = await registerUser(formData);
      this.user = res.data;
      localStorage.setItem('user', JSON.stringify(this.user));
      if (router) {
        router.push('/kart');
      }
      } catch (e) {
      this.error = e.response?.data?.message || e.message;
      } finally {
      this.isLoading = false;
      }
    },
    clearUser() {
      this.user = null;
      this.error = null;
      localStorage.removeItem('user');
    },
  },
});
