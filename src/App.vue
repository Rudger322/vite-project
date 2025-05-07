<script setup>
import Main from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <router-view :key="$route.fullPath"/>
</template>

<style>
.app{
  width: 100vw;
}
body{
  width: 100vw;
}
</style>
