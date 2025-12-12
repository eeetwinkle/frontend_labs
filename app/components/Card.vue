<script setup>
defineProps({
  text: String
})
</script>

<template>
  <div class="card">{{ text }}</div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins' as *;

.card {
  @include card(#d3ffd3);
}
</style>