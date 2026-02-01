<script setup>
defineProps({
  image: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="news-card">
    <div class="image-wrapper">
      <picture>
        <source :srcset="`${image.x2} 2x, ${image.x1} 1x`">
        <img :src="image.x1" :alt="title" class="news-img">
      </picture>
    </div>

    <div class="content">
      <div class="date">{{ date }}</div>
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 280 / 180;
  margin-bottom: 16px;
  background-color: vars.$color-gray;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
}

.date {
  font-family: vars.$font-base;
  font-size: 14px;
  line-height: 1.2;
  color: vars.$color-gray;
  margin-bottom: 8px;
}

.title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: vars.$color-black;
  margin: 0 0 8px 0;
}

.description {
  font-family: vars.$font-base;
  font-size: 14px;
  line-height: 1.4;
  color: vars.$color-gray;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>