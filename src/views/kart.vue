<template>
    <div class="kart">
        <div class="kart-products">

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