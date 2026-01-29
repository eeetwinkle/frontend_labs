<template>
  <div class="layout">
    <Header />
    <main class="main">
      <Slider />
      <Description />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use 'reset-css';

.swiper {
  width: 100%;
  height: 100%;
  display: block;
  min-width: 100%;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

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
import Slider from "~/components/Slider.vue";
import Description from "~/components/Description.vue";
</script>