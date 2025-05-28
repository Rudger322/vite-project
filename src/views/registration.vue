<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import { globalData } from '../api/global'
const userStore = useUserStore();

const route = useRouter();
const form = reactive({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
});

const onSubmit = async () => {
    await userStore.registration(form);
    if (userStore.user) {
        globalData.userid = userStore.user.userid
        route.push('/kart');
    }
};
</script>

<template>
        <div class="regf">
                <form class="regform" @submit.prevent="onSubmit">
                        <h1 class="regform-title">Your Name</h1>
                        <input
                                type="text"
                                placeholder="First Name"
                                class="regform-placeholder"
                                v-model="form.firstName"
                        >
                        <input
                                type="text"
                                placeholder="Last Name"
                                class="regform-placeholder"
                                v-model="form.lastName"
                        >
                        <div class="regform-gender">
                                <label>
                                <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        v-model="form.gender"
                                        class="regform-checkbox"
                                >
                                Male
                                </label>
                                <label>
                                <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        v-model="form.gender"
                                        class="regform-checkbox"
                                >
                                Female
                                </label>
                        </div>
                        <h1 class="regform-title">Login details</h1>
                        <input
                                type="text"
                                placeholder="Email"
                                class="regform-placeholder"
                                v-model="form.email"
                        >
                        <input
                                type="password"
                                placeholder="Password"
                                class="regform-placeholder"
                                v-model="form.password"
                        >
                        <p class="regform-descrip">Please use 8 or more characters, with at least 1 number and a <br> mixture of uppercase and lowercase letters</p>
                        <input type="submit" value="JOIN NOW" class="regform-button">
                </form>
                <div class="regf-text">
                        <h1 class="regf-text-title">LOYALTY HAS ITS PERKS</h1>
                        <p class="regf-text-desc">Get in on the loyalty program where you can earn points and <br> unlock serious perks. Starting with these as soon as you join:</p>
                        <ul>
                                <li>15% off welcome offer</li>
                                <li>Free shipping, returns and exchanges on all orders</li>
                                <li>$10 off a purchase on your birthday</li>
                                <li>Early access to products</li>
                                <li>Exclusive offers & rewards</li>
                        </ul>
                </div>
        </div>
</template>

<style scoped>
.regf{
        display: flex;
        width: 100vw;
        justify-content: space-around;
        padding-top: 64px;
        padding-bottom: 96px;
        flex-wrap: wrap;
}
.regform{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
}
.regform-title{
        margin-bottom: 20px;
        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        color: #222222;
}
.regform-placeholder{
        border-color: #A4A4A4;
        border-style: solid;
        color: #B1B1B1;
        padding-left: 17px;
        width: 360px;
        height: 45px;
        margin-bottom: 20px;
}

.regform-gender{
        display: flex;
        width: 132px;
        justify-content: space-between;
}
label{
        display: flex;
        align-items: center;
        width: 62px;
        gap: 10px;
        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 13px;

        color: #000000;
}
.regform-descrip{

        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;

        color: #B1B1B1;
        margin-bottom: 40px;

}
.regform-button{
        background-color: #F16D7F;
        color: #FFFFFF;
        border-style: none;
        width: 167px;
        height: 50px;
}

.regf-text-title{
        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;

        color: #000000;
}
.regf-text-desc{
        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        margin: 22px 0;
        color: #000000;
}
.regf-text ul {
        list-style-position: inside; 
        padding-left: 0; 
        list-style-image: url('/src/assets/li-reg.svg');
        gap: 22px;
}
li{
        font-family: 'Lato-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 16px;
}
</style>
