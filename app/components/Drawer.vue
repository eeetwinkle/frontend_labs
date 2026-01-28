<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const manageBodyScroll = (shouldLock) => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = shouldLock ? 'hidden' : ''
  }
}

watch(
    () => props.isOpen,
    (isOpen) => {
      manageBodyScroll(isOpen)
    },
    { immediate: true }
)

onUnmounted(() => {
  manageBodyScroll(false)
})
</script>

<template>
  <div class="drawer-container" :class="{ active: isOpen }">
    <div class="backdrop" @click="emit('close')"></div>

    <div class="drawer-panel">
      <button class="close-btn" @click="emit('close')">
        <img src="~/assets/images/close.svg" alt="close" />
      </button>

      <div class="drawer-content">
        <ul class="menu-list">
          <li>Реализованные проекты</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>

        <div class="contacts-block">
          <div class="contact-row">
            <img src="~/assets/images/phone.svg" class="icon" />
            <a href="tel:+79009009090" class="contact">
              <span class="phone-text">+7 (900) 900-90-90</span>
            </a>
          </div>
          <div class="contact-row">
            <img src="~/assets/images/email.svg" class="icon" />
            <a href="mailto:info@gmail.com" class="contact">
              <span class="text">info@gmail.com</span>
            </a>
          </div>
          <div class="contact-row address">
            <img src="~/assets/images/location.svg" class="icon" />
            <span>г. Владивосток<br />ул. Выселковая 49, стр. 3</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as mixins;
@use "~/assets/scss/variables" as vars;

.drawer-container {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0s linear 0.3s;

  &.active {
    pointer-events: auto;
    visibility: visible;
    transition-delay: 0s;

    .backdrop {
      opacity: 1;
    }

    .drawer-panel {
      transform: translateX(0);
    }
  }
}

.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 320px;
  background: vars.$color-green;
  color: vars.$color-white;
  padding: 24px;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}

.close-btn {
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    width: 12px;
    height: 16px;
    filter: brightness(0) invert(1);
  }
}

.drawer-content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0 0 auto 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: vars.$font-base;
  font-size: 18px;
  font-weight: 400;
}

.contacts-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: vars.$font-title;
  font-size: 16px;

  &.address {
    align-items: flex-start;
    line-height: 1.4;
    font-family: vars.$font-base;
  }
}

.icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}
.contact {
  text-decoration: none;
  color: vars.$color-white;
}
</style>