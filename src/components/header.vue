<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
<header>
    <div class="header_left">
        <router-link to="/"><img src="../assets/logo.svg" alt="Logo" class="header_left_logo"/></router-link>
        <img src="../assets/search.svg" alt="Search" class="header_left_search"/>
    </div>
    <div class="header_right">
        <img src="../assets/menu.svg" alt="Logo" class="header_right_menu" @click="toggleMenu"/>
        <router-link to="/registration">
          <img src="../assets/registration.svg" alt="Logo" class="header_right_reg"/>
        </router-link>
        <router-link to="/kart">
          <img src="../assets/kart.svg" alt="Logo" class="header_right_kart"/>
        </router-link>
        
    </div>
    <div v-if="isMenuOpen" class="header_menu">
      <ul>
        <h3 class="header_menu_subtitle">MAN</h3>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Bags</a></li>
        <li><a href="#">Denim</a></li>
        <li><a href="#">T-Shirts</a></li>
      </ul>
      <ul>
        <h3 class="header_menu_subtitle">WOMAN</h3>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Jackets & Coats</a></li>
        <li><a href="#">Polos</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Shirts</a></li>
      </ul>
      <ul>
        <h3 class="header_menu_subtitle">KIDS</h3>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Jackets & Coats</a></li>
        <li><a href="#">Polos</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Shirts</a></li>
        <li><a href="#">Bags</a></li>
      </ul>
    </div>
</header>

</template>


<style>
header{
    flex-shrink: 0;
    position: sticky;
    height: 75px;
    background-color: #222222;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header_left{
    width: 111px;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}
.header_right{
    width: 169px;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}
.header_menu {
  z-index: 10000;
  position: absolute;
  top: 75px;
  z-index: 200;
  right: 0;
  background-color: #FFFFFF;
  color: white;
  padding: 1rem;
  padding-top: 37px;
  height: 764px;
  width: 232px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.header_menu_subtitle{
  color: #F16D7F;
  margin-left: 33px;
  margin-bottom: 12px;
}
.header_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  
}

.header_menu li {
  margin-bottom: 12px;
  margin-left: 54px;
}

.header_menu a {
  color: #6F6E6E;
  text-decoration: none;
}
</style>