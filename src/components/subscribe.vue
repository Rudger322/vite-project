<template>
    <div class="subscribe">
        <div class="subscribe-wrap">
            <div class="subscribe-wrap-block">
                <img src="../assets/img/subscribe_woman.png" alt="woman" class="subscribe-wrap-left-img">
                <p class="subscribe-wrap-left-description">“Vestibulum quis porttitor dui! Quisque<br> viverra nunc mi, a pulvinar purus<br> condimentum“</p>
            </div>
            <div class="subscribe-wrap-block">
                <h2 class="subscribe-wrap-right-title">SUBSCRIBE</h2>
                <p class="subscribe-wrap-right-subtitle">FOR OUR NEWLETTER AND PROMOTION</p>
                <form>
                    <input type="text" id="email" placeholder="Enter Your Email" class="form-text"><br>
                    <input type="submit" value="Subscribe" class="form-button">
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.subscribe{
    background-image: url("../assets/img/subscribeback.png");
    display: flex;
    justify-content: center;
    width: 100vw;
    background-size: cover;
    position: relative;
}
.subscribe-wrap{
    z-index: 1;
    display: flex;
    max-width: 100vw;
    height: 448px;
    align-items: center;
    gap: 328px;
}
.subscribe-wrap-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}
.subscribe-wrap-left-img{
    width: 144px;
    height: 144px;
}
.subscribe-wrap-left-description{
    text-align: center;
    font-family: "Lato-Regular";
}
.subscribe-wrap-right-title{
    font-family: 'Lato-Bold';
}
.subscribe-wrap-right-subtitle{
    font-family: 'Lato-Regular';
}
form{
    display: flex;
    font-family: 'Lato-Regular';
}
input{
    height: 49px;
}
.form-text{
    border-style: solid;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: #E1E1E1;
    color: #000000;
    width: 256px;
    padding-left: 22px;
    box-shadow: -2px 2px 2px rgb(170, 170, 170);
}
.form-button{
    border-style: none;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    width: 100px;
    background-color: #F16D7F;
    color: #FFFFFF;
}

.subscribe::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgb(255, 255, 255,0.7);
  pointer-events: none;
}

@media screen and (max-width: 1024px) {
  .subscribe-wrap{
    flex-direction: column;
    height: 693px;
    display: flex;
    gap: 60px;
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  .subscribe-wrap{
    height: 550px;
  }
}
</style>