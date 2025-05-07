<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Blackpart from '../components/blackpart.vue'
import Subscribe from '../components/subscribe.vue'
export default { components: { Header, Footer, Blackpart, Subscribe } }
</script>

<template>
    <div class="layout">
      <Header />
      <div class="content">
        <section class="page">
          <router-view />
        </section>
      </div>
      <Blackpart />
      <Subscribe />
      <Footer />
    </div>
  </template>

<style scoped>
.layout { display: flex; flex-direction: column; height: 100vh; width: 100vw;}
.content { display: flex; flex: 1;}
.page { display: flex; flex-direction: column;}
</style>