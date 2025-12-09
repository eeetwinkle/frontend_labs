<template>
  <div class="layout">
    <Header />
    <main class="main">
      <h1>Hello, World!</h1>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import 'reset-css';
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.main {
  padding: 24px;
  text-align: center;
}
</style>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>