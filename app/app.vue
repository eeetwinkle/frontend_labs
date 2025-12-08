<template>
  <div>
    <Header />
    <Banner />
    <main class="main">
      <h1>Hello, World!</h1>
      <p>Look at my website</p>
      <div class="cards">
        <Card text="Here" />
        <Card text="And here" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/mixins' as *;

.main {
  padding: 24px;
  text-align: center;

  .cards {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
  }
}
</style>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";

</script>