<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../api/productstore'

const store = useProductStore()

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
    <div class="nav">
        <h1 class="nav-title pink">NEW ARRIVALS </h1>
        <div class="nav-pos">HOME / MEN / <span class="pink">NEW ARRIVALS</span> </div>
    </div>
    <div class="catalog">
    <div class="filters">
      <button disabled>Фильтр 1</button>
      <button disabled>Фильтр 2</button>
    </div>

    <div class="produc">
      <router-link v-for="product in store.paginatedProducts" :key="product.id" :to="`/product/${product.id}`" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-card-img">
        <h3 class="product-card-title">{{ product.title }}</h3>
        <p class="product-card-description">{{ product.description }}</p>
        <p class="product-card-price">{{ product.price }}</p>
      </router-link>
    </div>

    <div class="pagination">
      <button @click="store.prevPage" :disabled="store.currentPage === 1" class="pag-button"><</button>

      <button 
        v-for="page in store.totalPages" 
        :key="page" 
        @click="store.goToPage(page)" 
        :class="{ active: page === store.currentPage }" class="pag-button">
        {{ page }}
      </button>

      <button @click="store.nextPage" :disabled="store.currentPage === store.totalPages" class="pag-button">></button>
    </div>
  </div>
</template>

<style scoped>
.nav{
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-around;
    height: 148px;
    background-color: #F8F3F4;
}
.nav-title{
    font-family: 'Lato-Regular';
}
.nav-pos{
    font-family: 'Lato-Light';
}
.pink{
    color: #F16D7F;
}
.filters{
    margin-top: 52px;
}
.catalog{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
}
.produc{
    margin-top: 64px;
    margin-bottom: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 1140px;
    gap: 30px;
}
.product-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 580px;
    width: 360px;
    background-color: #F8F8F8;
}
.product-card-img{
    width: 360px;
    height: 420px;
}
.product-card-title{
    font-family: 'Lato-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 24px;
}
.product-card-description{
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5D5D5D;
    padding-left: 18px;
    padding-right: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.product-card-price{
    font-family: 'Lato-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #F16D7F;
    padding-bottom: 20px;
    padding-left: 18px;
    padding-right: 18px;
}
.pagination{
    border-color: #C4C4C4;
    background-color: #EBEBEB;
    display: flex;
    gap: 20px;
    border-style: dashed;
    padding: 15px;
    
}
.pag-button{
    border: none;
    background-color: #EBEBEB;
    font-size: 16px;
    font-family: 'Lato-Light';
}
.pag-button:hover{
    color: #EF5B70;
}
</style>