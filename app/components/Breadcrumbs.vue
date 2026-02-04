<script setup>
defineProps({
  currentText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="breadcrumbs">
    <NuxtLink to="/" class="crumb-link">Главная</NuxtLink>
    <span class="separator">/</span>
    <span class="crumb-current">{{ currentText }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.breadcrumbs {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  font-family: vars.$font-base;
  font-size: 20px;
  @include mixins.small {
    font-size: 16px;
  }
}

.crumb-link {
  color: vars.$color-green;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}

.separator {
  color: vars.$color-gray;
}

.crumb-current {
  color: vars.$color-gray;
}
</style>