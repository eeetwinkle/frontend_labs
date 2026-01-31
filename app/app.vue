<template>
  <div class="layout">
    <Header />
    <main class="main">
      <Slider />
      <Description />
      <section class="projects-section">
        <div class="projects-container">
          <h2 class="section-title">Реализованные проекты</h2>
          <ProjectsList />
        </div>
      </section>
      <NewsList />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use 'reset-css';
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;


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
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.main {
  text-align: center;
  width: 100%;
  overflow-x: hidden;
}


.projects-section {

  background: vars.$color-light-green;
  padding-bottom: 100px;
  padding-top: 40px;

  @include mixins.large {
    padding: 30px 0 40px 0;
  }

}

.projects-container {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  @include mixins.large {
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 30px;
  }

  @include mixins.small {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
}

.section-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  margin: 0 0 40px 0;
  text-align: left;
  color: vars.$color-black;

  @include mixins.small {
    font-size: 24px;
    margin-bottom: 24px;
  }
}

</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Slider from "~/components/Slider.vue";
import Description from "~/components/Description.vue";
import ProjectsList from "~/components/ProjectsList.vue";
</script>