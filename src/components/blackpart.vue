<template>
<div class="black">
    <div class="black-wrap">
        <div class="black-wrap-part">
            <img src="../assets/bus.svg" alt="" class="black-wrap-part-img">
            <h3 class="black-wrap-part-title">Free Delivery</h3>
            <p class="black-wrap-part-description">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
        <div class="black-wrap-part">
            <img src="../assets/sale.svg" alt="" class="black-wrap-part-img">
            <h3 class="black-wrap-part-title">Sales & discounts</h3>
            <p class="black-wrap-part-description">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
        <div class="black-wrap-part">
            <img src="../assets/krown.svg" alt="" class="black-wrap-part-img">
            <h3 class="black-wrap-part-title">Quality assurance</h3>
            <p class="black-wrap-part-description">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
    </div>
</div>
</template>

<style>
.black{
    display: flex;
    background-color: #222224;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 95px;
}
.black-wrap{
    display: flex;
    max-width: 1140px;
    height: 341px;
    align-items: center;
}
.black-wrap-part{
    width: 360px;
    height: 134px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.black-wrap-part-img{
    width: 45px;
    height: 32px;
}
.black-wrap-part-title{
    margin-top: 32px;
    margin-bottom: 16px;
}
.black-wrap-part-title{
    color: #FBFBFB;
    font-family: 'Lato-Regular';
}
.black-wrap-part-description{
    color: #FBFBFB;
    text-align: center;
    font-family: 'Lato-Light';
}
@media screen and (max-width: 1024px) {
  .black-wrap{
    flex-direction: column;
    height: 610px;
    justify-content: space-around;
  }
}
</style>