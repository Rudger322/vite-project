<script setup>
import GetProduct from '../api/product.js';
import {ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../api/productstore'

const products = ref(null);
const route = useRoute();
const store = useProductStore()

onMounted(async () => {
    const id = route.params.id;
    store.fetchProducts()
    try {
        products.value = await GetProduct(id);
        console.log(products.value);
    } catch (error) {
        console.error('Ошибка загрузки продуктов:', error.message);
    }
});

</script>
<template>
<div v-if="products" class="wrap">
    <div class="nav">
        <h1 class="nav-title pink">NEW ARRIVALS </h1>
        <div class="nav-pos">HOME / MEN / <span class="pink">NEW ARRIVALS</span> </div>
    </div>
    <div class="carousel">
        <img :src="products.image" :alt="products.title" class="carousel-img">
    </div>

    <div class="addblock">
        <h2 class="addblock-category">{{products.category}}</h2>
        <div class="addblock-pinqline"></div>
        <h1 class="addblock-title">{{products.title}}</h1>
        <p class="addblock-description">{{products.description}}</p>
        <div class="addblock-price">${{products.price}}</div>
        <hr>
        <div class="addblock-choose">
            <div class="addblock-choose-color choose">CHOOSE COLOR</div>
            <div class="addblock-choose-size choose">CHOOSE SIZE </div>
            <div class="addblock-choose-quantity choose">QUANTITY</div>
        </div>
        <button class="addblock-button">
            <img src="../assets/pinqkart.svg" alt="">
            Add to Cart
        </button>
    </div>
    <div class="produc">
      <router-link v-for="product in store.paginatedProducts.slice(0,3)" :key="product.id" :to="`/product/${product.id}`" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-card-img">
        <h3 class="product-card-title">{{ product.title }}</h3>
        <p class="product-card-description">{{ product.description }}</p>
        <p class="product-card-price">{{ product.price }}</p>
      </router-link>
    </div>
</div>

<div v-else>
загрузка
</div>
</template>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
}
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
.carousel{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    padding-bottom: 42px;
    padding-top: 12px;
}
.carousel-img{
    width: 40%;
}
.addblock{
    background-color: #FFFFFF;
    width: 1142px;
    height: 600px;
    border-color: rgb(0, 0, 0, 0.25);
    border-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.addblock-category{
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-transform:uppercase;
    color: #F16D7F;
}
.addblock-pinqline{
    width: 64px;
    height: 3px;
    background-color: #F16D7F;
    margin: 12px 0;
}
.addblock-title{

    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;

    color: #4D4D4D;
}
.addblock-description{
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    max-width: 556px;
    color: #5E5E5E;

    margin-top: 48px;
    margin-bottom: 32px;
}
.addblock-price{
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #EF5B70;
}
hr{
    border: none;
    width: 641px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 64px 0;
}
.addblock-choose{
    display: flex;
    gap: 22px;
}
.choose{

    font-family: 'Lato-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #6F6E6E;
}
.addblock-button{

    font-family: 'Lato-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border-color: #EF5B70;
    color: #EF5B70;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 212px;
    height: 48px;
    border-radius: 1px;
    outline: none;
    border-radius: 0px;
    border-style: solid;
    margin-top: 48px;
    padding: 10px 25px;
}
.produc{
    display: flex;
    margin-top: 50px;
    gap: 30px;
    margin-bottom: 128px;
}
</style>