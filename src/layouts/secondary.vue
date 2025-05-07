<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Subscribe from '../components/subscribe.vue'
export default { components: { Header, Footer, Subscribe } }
</script>

<template>
    <div class="layout">
      <Header />
      <div class="content">
        <section class="page">
          <router-view />
        </section>
      </div>
      <Subscribe />
      <Footer />
    </div>
  </template>

<style scoped>
.layout { display: flex; flex-direction: column; height: 100vh; }
.content { display: flex; flex: 1;}
.page { display: flex; flex-direction: column;}
</style>