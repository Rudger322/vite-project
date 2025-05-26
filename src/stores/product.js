import { defineStore } from 'pinia';
import api from '../api/axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    product: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchProduct(id) {
      this.isLoading = true;
      this.error = null;
      try {
        const res = await api.get(`/products/${id}`);
        this.product = res.data;
      } catch (e) {
        this.error = e.message || 'Ошибка загрузки товара';
      } finally {
        this.isLoading = false;
      }
    },

    clearProduct() {
      this.product = null;
      this.error = null;
    },
  },
});