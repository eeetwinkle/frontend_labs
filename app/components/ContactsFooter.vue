<script setup>
import { mockContacts } from '~/mock/contacts'

const { phone, email, address } = mockContacts
</script>

<template>
  <div class="sections contacts-list">
    <ul>
      <li>
        <a :href="`tel:${phone.value}`" class="contact">
          <img src="~/assets/images/phone.svg" class="icon" alt="Phone"/>
          <span class="text">{{ phone.label }}</span>
        </a>
      </li>

      <li>
        <a :href="`mailto:${email.value}`" class="contact">
          <img src="~/assets/images/mail.svg" class="icon" alt="Email"/>
          <span class="text">{{ email.label }}</span>
        </a>
      </li>

      <li>
        <div class="contact address">
          <img src="~/assets/images/location.svg" class="icon" alt="Location"/>
          <span class="text">
            {{ address.city }}<br />
            {{ address.street }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.sections.contacts-list {
  grid-area: contacts;
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 19px;

  @include mixins.small {
    align-items: flex-start;
  }
}

.sections.contacts-list ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contacts-list .text {
  font-family: vars.$font-title;
  font-size: 14px;
  line-height: 17px;
  white-space: pre-line;
}

.contact {
  display: flex;
  align-items: center;
  gap: 8px;
  color: vars.$color-white;
  text-decoration: none;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>