<template>
  <div class="stat-card" :class="`stat-card--${variant}`">
    <img
        :src="`~/assets/images/${icon}.svg`"
        :alt="icon"
        class="stat-card__icon"
    />
    <div class="stat-card__content">
      <div class="stat-card__value">{{ value }}</div>
      <div class="stat-card__description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;
.stat-card {
  background-color: #F7F8F8;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;

  &__icon {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
    display: block;
  }

  &__value {
    font-family: vars.$font-title;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 6px;
    color: vars.$color-black;
  }

  &__description {
    font-family: vars.$font-base;
    font-size: 13px;
    line-height: 1.4;
    color: vars.$color-gray;
  }
}
</style>