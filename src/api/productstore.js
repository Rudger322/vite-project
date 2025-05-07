import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
      products: [],
      currentPage: 1,
      itemsPerPage: 9,
    }),
    getters: {
      totalPages: (state) => Math.ceil(state.products.length / state.itemsPerPage),
      paginatedProducts: (state) => {
        const start = (state.currentPage - 1) * state.itemsPerPage
        const end = start + state.itemsPerPage
        return state.products.slice(start, end)
      },
    },
    actions: {
      async fetchProducts() {
        try {
          const res = await fetch('https://fakestoreapi.com/products')
          const data = await res.json()
          this.products = data
        } catch (e) {
          console.error('Ошибка при загрузке товаров', e)
        }
      },
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page
        }
      },
      nextPage() {
        this.goToPage(this.currentPage + 1)
      },
      prevPage() {
        this.goToPage(this.currentPage - 1)
      },
    },
  })