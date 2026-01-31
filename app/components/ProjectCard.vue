<script setup>
defineProps({
  image: {
    type: Object,
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
  <div class="project">
    <div class="content">
      <h4 class="project-title">{{ title }}</h4>
      <div class="project-description" v-html="description" />
    </div>

    <div class="image-wrapper">
      <picture>
        <source :srcset="`${image.x2} 2x, ${image.x1} 1x`">
        <img :src="image.x1" :alt="title" class="project-img">
      </picture>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.project {
  background-color: vars.$color-white;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 360px;
}

.content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-family: vars.$font-base;
  font-weight: 500;
  text-align: left;
  font-size: 20px;
  line-height: 1.2;
  margin: 0 0 16px 0;
  color: vars.$color-black;
}

.project-description {
  font-family: vars.$font-base;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  color: vars.$color-gray;

  ::v-deep(p) {
    margin: 0 0 16px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.image-wrapper {
  width: 50%;
  position: relative;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@include mixins.small {
  .project {
    flex-direction: column-reverse;
    min-width: 280px;
  }

  .image-wrapper {
    width: 100%;
    height: 200px;
  }

  .content {
    padding: 24px;
  }
}
</style>