import { defineStore } from 'pinia';
import { getCartData } from '../api/fakeApi';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: null,
  }),
  actions: {
    async getCart(cartId = 1) {
      const res = await getCartData(cartId);
      this.cart = res.data;
    },
    updateCart(action, item) {
      if (!this.cart) return;

      if (action === 'add') {
        this.cart.products.push(item);
      } else if (action === 'delete') {
        this.cart.products = this.cart.products.filter((i) => i.productId !== item.productId);
      } else if (action === 'update') {
        const target = this.cart.products.find((i) => i.productId === item.productId);
        if (target) target.quantity = item.quantity;
      }
    },
  },
});
