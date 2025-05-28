import { defineStore } from 'pinia';
import api from '../api/axios';
import { useUserStore } from './user';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || null,         
    isLoading: false,
    error: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),

  getters: {
    totalItems: (state) => state.cart
      ? state.cart.products.reduce((sum, item) => sum + item.quantity, 0)
      : 0,
    totalPrice: (state) => state.cart
      ? state.cart.products.reduce((sum, item) => sum + (item.quantity * (item.price || 0)), 0)
      : 0,
  },

  actions: {
    async createCart() {
      const userStore = useUserStore();
      const userId = userStore.user?.id;
      if (!userId) throw new Error('User not found: необходимо зарегистрироваться или войти.');

      this.isLoading = true;
      this.error = null;
      try {
      const payload = {
        userId,
        products: []
      };
      const res = await api.post('/carts', payload);
      this.cart = res.data;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      } catch (e) {
      this.error = e.response?.data?.message || e.message;
      } finally {
      this.isLoading = false;
      }
    },

    async fetchCart() {
      const userStore = useUserStore();
      const userId = userStore.user?.id;
      if (!userId) return;

      this.isLoading = true;
      this.error = null;
      try {
      const res = await api.get(`/carts/${userId}`);
      this.cart = res.data || null;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      } catch (e) {
      this.error = e.response?.data?.message || e.message;
      } finally {
      this.isLoading = false;
      }
    },

    async addToCart(product, quantity = 1) {
      const userStore = useUserStore();
      const userId = userStore.user?.id;
      if (!userId) throw new Error('User not authenticated');

      if (!this.cart) {
      await this.createCart();
      }

      this.isLoading = true;
      this.error = null;
      try {
      const idx = this.cart.products.findIndex(item => item.productId === product.id);
      if (idx !== -1) {
        this.cart.products[idx].quantity += quantity;
      } else {
        this.cart.products.push({ productId: product.id, quantity });
      }
      const payload = {
        id: this.cart.id,
        userId,
        products: this.cart.products
      };
      const res = await api.put(`/carts/${this.cart.id}`, payload);
      this.cart = res.data;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      } catch (e) {
      this.error = e.response?.data?.message || e.message;
      } finally {
      this.isLoading = false;
      }
    },

    async removeFromCart(productId) {
      if (!this.cart) return;

      this.isLoading = true;
      this.error = null;
      try {
        this.cart.products = this.cart.products.filter(item => item.productId !== productId);
        const userStore = useUserStore();
        const userId = userStore.user?.id;
        const payload = {
          userId,
          date: this.cart.date,
          products: this.cart.products
        };
        const res = await api.put(`/carts/${this.cart.id}`, payload);
        this.cart = res.data;
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.isLoading = false;
      }
    },
    async clearCart() {
      if (!this.cart) return;
      this.cart.products = [];
      await this.addToCart({ id: null }, 0);
    }
  }
});
