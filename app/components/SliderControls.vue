<template>
  <div class="controls-container">
    <button @click="$emit('prev')" class="nav-btn prev">
      <img src="~/assets/images/next.svg" alt="prev" />
    </button>

    <button @click="$emit('next')" class="nav-btn next">
      <img src="~/assets/images/next.svg" alt="next" />
    </button>

    <div class="pagination">
      <button
          v-for="(dot, index) in total"
          :key="index"
          class="dot"
          :class="{ active: current === index }"
          @click="$emit('go-to', index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  total: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  }
})

defineEmits(['prev', 'next', 'go-to'])
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.controls-container {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 10;
}

.nav-btn {
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background-color: vars.$color-green;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }

  &.prev {
    left: 32px;
    img {
      transform: rotate(180deg);
    }
  }

  &.next {
    right: 32px;
  }

  @include mixins.medium {
    display: none;
  }
}

.pagination {
  pointer-events: auto;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;

  @include mixins.small {
    bottom: 16px;
  }
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: vars.$color-green;
  }
}
</style>