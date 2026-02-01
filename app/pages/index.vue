<template>
  <div>
      <Slider />
      <Description />

      <section class="projects-section">
        <div class="projects-container">
          <h2 class="section-title">Реализованные проекты</h2>
          <ProjectsList />
        </div>
      </section>

      <NewsList />
  </div>
</template>

<style lang="scss">
@use '../../node_modules/reset-css';
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
  font-size: 38px;
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
import Slider from "~/components/Slider.vue";
import Description from "~/components/Description.vue";
import ProjectsList from "~/components/ProjectsList.vue";
</script>