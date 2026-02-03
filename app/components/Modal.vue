<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="overlay" />
      <DialogContent class="content">
        <div class="modal-container">
          <DialogClose class="close-btn" aria-label="Close">
            <img src="~/assets/images/close_modal.svg" alt="close" class="img"/>
          </DialogClose>

          <DialogTitle class="title">Оставить заявку</DialogTitle>

          <Form />

        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose
} from 'radix-vue'

defineProps({
  open: Boolean
})

const emit = defineEmits(['update:open'])
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 100;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.content {
  background-color: vars.$color-light-green;
  border-radius: 10px;
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 448px;
  max-height: 603px;
  z-index: 101;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  @include mixins.small {
    width: 250px;
    max-height:450px;
  }
}

.modal-container {
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(2, 159, 89, 0.2);
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:hover {
    background-color: vars.$color-green;

    .img {
      filter: brightness(0) invert(1);

    }
  }
  @include mixins.small {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
}

.img {
  width: 12px;
  height: 16px;
  transition: filter 0.3s ease;
  @include mixins.small {
    width: 7px;
    height: 7px;
  }
}

.title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 32px;
  color: vars.$color-black;
  margin-top: 25px;
  text-align: left;
  width: 100%;
  @include mixins.small {
    font-size: 20px;
  }
}

@keyframes overlayShow {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>