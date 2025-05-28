<script setup>
import { ref, onMounted } from 'vue'
import {useCartStore} from '../stores/cart'
import { useCatalogStore } from '../stores/catalog';

const cartStore = useCartStore();
const catalogStore = useCatalogStore();

const cartProducts = ref([]);

onMounted(async () => {
    await catalogStore.fetchProducts();
    const allProducts = catalogStore.products;
    console.log(cartStore.cart.products);
    if (cartStore.cart && Array.isArray(cartStore.cart.products)) {
        cartProducts.value = cartStore.cart.products.map(cartItem => {
            const product = allProducts.find(p => String(p.id) === String(cartItem.productId) || Number(p.id) === Number(cartItem.productId));
            if (product) {
                return {
                    ...product,
                    quantity: cartItem.quantity
                };
            }
            return null;
        }).filter(Boolean);
    } else {
        cartProducts.value = [];
    }
    console.log(cartProducts.value);
});
</script>

<template>
    <div class="kart">
        <div class="kart-products">
            <div class="kart-products-prod" v-for="product in cartProducts">
                <img :src="product.image" :alt="product.title" class="kart-products-prod-img">
                <div class="kart-products-prod-desc">
                    <h3 class="kart-products-prod-desc-title">{{ product.title }}</h3>
                    <p class="kart-products-prod-desc-price">Price: ${{ product.price }}</p>
                </div>
            </div>
            <div class="kart-products-buttons">
                <button class="kart-products-buttons-b">CLEAR SHOPPING CART</button>
                <button class="kart-products-buttons-b">CONTINUE SHOPPING</button>
            </div>
        </div>
        <div class="kart-order">
            <div class="kart-order-adress">
                <form class="kart-order-adress-form">
                    <h2 class="kart-order-adress-form-title">SHIPPING ADRESS</h2>
                    <input type="text" placeholder="City" class="kart-order-adress-form-place">
                    <input type="text" placeholder="State" class="kart-order-adress-form-place">
                    <input type="text" placeholder="Postcode / Zip" class="kart-order-adress-form-place">
                    <input type="submit" value="GET A QUOTE" class="kart-order-adress-form-submit">
                </form>
            </div>
            <div class="kart-order-sum">
                <p class="kart-order-sum-total">GRAND TOTAL</p>
                <hr>
                <button class="kart-order-sum-button">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.kart{
    display: flex;
    padding-top: 114px;
    padding-bottom: 128px;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
.kart-products-prod{
    display: flex;
    width: 652px;
    margin-bottom: 40px;
    margin-right: 128px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

}
.kart-products-prod-img{
    width: 262px;
    height: 306px;
}
.kart-products-prod-desc{
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    margin-top: 22px;
}
.kart-products-prod-desc-title{
    margin-bottom: 42px;

    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #222222;
}
.kart-products-prod-desc-price{
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;

    color: #EF5B70;
}
.kart-products-buttons{
    display: flex;
    width: 652px;
    justify-content: space-between;
}
.kart-products-buttons-b{
    width: 235px;
    height: 50px;
    border: 1px #A4A4A4 solid;
    background-color: #FFFFFF;

    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;

    color: #000000;


}
.kart-order-adress-form{
    display: flex;
    flex-direction: column;
}
.kart-order-adress-form-title{
    font-family: "Lato-Light";

    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: #222222;
    margin-bottom: 20px;
}
.kart-order-adress-form-place{
    width: 360px;
    height: 45px;
    margin-bottom: 20px;
    border: #A4A4A4 solid 1px;
}
.kart-order-adress-form-submit{
    width: 100px;
    height: 34px;
    background-color: white;
    border: #A4A4A4 solid 1px;
    color: #4A4A4A;
    margin-bottom: 58px;
}
hr{
    width: 275px;
}
.kart-order-sum{
    width: 360px;
    height: 214px;
    background-color: #F5F3F3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.kart-order-sum-button{
    width: 273px;
    height: 50px;
    font-family: "Lato-Light";
    color: #FFFFFF;
    background-color: #F16D7F;
    border: none;
}
</style>