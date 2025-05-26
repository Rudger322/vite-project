import { defineStore } from 'pinia';
import api from '../api/axios';

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    products: [],
    categories: [],
    selectedCategory: 'all',
    currentPage: 1,
    itemsPerPage: 9,
    isLoading: false,
    error: null,
  }),

  getters: {
    filteredProducts: (state) => {
      if (state.selectedCategory === 'all') return state.products;
      return state.products.filter(p => p.category === state.selectedCategory);
    },
    totalPages: (state) =>
      Math.ceil(state.filteredProducts.length / state.itemsPerPage),
    paginatedProducts: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.filteredProducts.slice(start, end);
    },
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const res = await api.get('/products');
        this.products = res.data;
      } catch (e) {
        this.error = e.message || 'Ошибка загрузки товаров';
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCategories() {
      try {
        const res = await api.get('/products/categories');
        this.categories = ['all', ...res.data];
      } catch (e) {
        console.error('Ошибка загрузки категорий', e);
      }
    },

    setCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    nextPage() {
      this.goToPage(this.currentPage + 1);
    },

    prevPage() {
      this.goToPage(this.currentPage - 1);
    },
  },
});