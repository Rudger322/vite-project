
<script setup>
import {ref, onMounted} from 'vue';
import getAllProducts from '../api/products.js';
import { RouterLink } from 'vue-router';

const products = ref([]);
onMounted(async () => {
    try {
        products.value = await getAllProducts;
        console.log(products.value);
    } catch (error) {
        console.error('Ошибка загрузки продуктов:', error.message);
    }
});
</script>

<template>
    <div class="hello_block">
        <img src="../assets/img/hello_man.png" alt="" class="hello_block_img" >
        <div class="hello_block_text">THE BRAND <br>
            <span class="medium_text">OF LUXERIOUS <span class="pink_text">FASHION</span></span></div>
    </div>
    <div class="offers">
        <div class="offers_wrap">
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">30% OFF
                <br><span class="pink_text" style="font-size: 24px">FOR WOMEN</span></div><img src="../assets/img/woman.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">HOT DEAL
                <br><span class="pink_text" style="font-size: 24px">FOR MEN</span></div><img src="../assets/img/men.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">NEW ARRIVALS
                <br><span class="pink_text" style="font-size: 24px">FOR KIDS</span></div><img src="../assets/img/kids.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">LUXIROUS & TRENDY
                <br><span class="pink_text" style="font-size: 24px">ACCESORIES</span></div><img src="../assets/img/accesories.png" alt="" class="offers_wrap_img_img"></div>
        </div>
    </div>
    <div class="products">
        <h2 class="products-title">Fetured Items</h2>
        <p class="products-subtitle">Shop for items based on what we featured in this week</p>
        <div class="products-wrap">
            <router-link v-for="product in products.slice(0,6)" :key="product.id" class="product-card" :to="`/product/${product.id}`">
                <img :src="product.image" :alt="product.title" class="product-card-img">
                <h3 class="product-card-title">{{ product.title }}</h3>
                <p class="product-card-description">{{ product.description }}</p>
                <p class="product-card-price">{{ product.price }}</p>
            </router-link>
        </div>
        <router-link to="/catalog" class="products-button">Browse All Product</router-link>
    </div>
</template>

<style>
.hello_block{
    width: 100vw;
    max-height: 2160px;
    background-color: #F1E4E6;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hello_block_img{
    width: 50%;
}
.hello_block_text{
    border-left: solid;
    border-width: 12px;
    border-color: #F16D7F;
    padding-left: 16px;

    font-family: 'Lato-Bold';
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    line-height: 32px;

    color: #222222;
}
.medium_text{
    font-size: 2rem;
}
.pink_text{
    color: #F16D7F;
    font-family: 'Lato-Bold';
}
.offers{
    width: 100vw;
    display: flex;
    justify-content: center;
    max-height: 100%;
}
.offers_wrap{
    margin: 0 16px;
    max-width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5%;
    column-gap: 3%;
    grid-auto-rows: auto;
    margin-top: 3%;
    margin-bottom: 5%;
}
.offers_wrap_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
}
.offers_wrap_img_text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Lato-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    z-index: 1;
    color: #FFFFFF;
}
.offers_wrap_img_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.offers_wrap_img:nth-child(4) {
  grid-column: 1 / -1;
}
.offers_wrap_img::after {
  content: '';
  z-index: 0;
  position: absolute;
  inset: 0;
  background-color: rgba(33, 22, 22, 0.7);
  pointer-events: none;
}
.products{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
}
.products-title{
    font-family: 'Lato-Regular';

    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
}
.products-subtitle{
    font-family: 'Lato-Regular';

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #9F9F9F;
}
.products-wrap{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    max-width: 1140px;
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
.products-button{
    width: 212px;
    height: 48px;
    background-color: #F16D7F;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
}
@media screen and (max-width: 1024px) {
  .products-wrap {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
    .hello_block{
        height: 363px;
    }
    .hello_block_img{
       display: none; 
    }
  .products-wrap {
    grid-template-columns: 1fr;
  }
  .offers{
    max-height: 100%;
    margin-bottom: 300px;
  }
  .offers_wrap{
    grid-template-columns: 1fr;
  }
}
</style>