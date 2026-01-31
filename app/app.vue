<template>
  <div class="layout">
    <Header />
    <main class="main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.main {
  text-align: center;
  width: 100%;
  overflow-x: hidden;
}


</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>