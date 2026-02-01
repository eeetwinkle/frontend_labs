<template>
  <div class="banner">Banner</div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins' as *;

.banner {
  @include card(green, white);
}
</style>