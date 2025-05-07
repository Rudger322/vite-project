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
        <img src="../assets/registration.svg" alt="Logo" class="header_right_reg"/>
        <img src="../assets/kart.svg" alt="Logo" class="header_right_kart"/>
    </div>
    <div v-if="isMenuOpen" class="header_menu">
      <ul>
        <li><a href="#">Пункт 1</a></li>
        <li><a href="#">Пункт 2</a></li>
        <li><a href="#">Пункт 3</a></li>
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
  position: absolute;
  top: 75px;
  right: 0;
  background-color: #FFFFFF;
  color: white;
  padding: 1rem;
  width: 232px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 100;
}

.header_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header_menu li {
  margin-bottom: 10px;
}

.header_menu a {
  color: #6F6E6E;
  text-decoration: none;
}
</style>