<script setup>
import { mockContacts } from '~/mock/contacts'

const { phone, email, address } = mockContacts

defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <div class="contacts-info" :class="variant">
    <div class="row">
      <img src="~/assets/images/phone.svg" class="icon" alt="Phone" />
      <a :href="`tel:${phone.value}`" class="contact-phone">
        <span class="text">{{ phone.label }}</span>
      </a>
    </div>

    <div class="row">
      <img src="~/assets/images/mail.svg" class="icon" alt="Email" />
      <a :href="`mailto:${email.value}`" class="contact">
        <span class="text">{{ email.label }}</span>
      </a>
    </div>

    <div class="row address-row">
      <img src="~/assets/images/location.svg" class="icon" alt="Location" />
      <span class="address-text">
        {{ address.city }}<br />
        {{ address.street }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.contacts-info {
  display: flex;
  flex-direction: column;

  &.default {
    gap: 24px;

    .row {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .address-row {
      align-items: flex-start;
    }

    .icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    .contact {
      font-family: vars.$font-base;
      font-size: 20px;
      line-height: 1.2;
      color: vars.$color-black;
      text-decoration: none;
      @include mixins.small {
        font-size: 16px;
      }
    }

    .contact-phone {
      font-weight: 600;
      font-family: vars.$font-base;
      font-size: 20px;
      line-height: 1.2;
      color: vars.$color-black;
      text-decoration: none;
      @include mixins.small {
        font-size: 16px;
      }
    }

    .phone-link {
      font-weight: 600;
    }

    .email-link, .address-text {
      font-family: vars.$font-base;
      font-weight: 400;
      font-size: 20px;
      text-align: left;
      @include mixins.small {
        font-size: 16px;
      }
    }
  }

  &.footer {
    gap: 24px;

    .row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .address-row {
      align-items: flex-start;
    }

    .icon {
      width: 16px;
      height: 16px;
      filter: brightness(0) invert(1);
    }

    .link, .text {
      font-family: vars.$font-title;
      font-size: 14px;
      line-height: 17px;
      color: vars.$color-white;
      text-decoration: none;
    }

    .link:hover {
      text-decoration: underline;
    }
  }
}

</style>