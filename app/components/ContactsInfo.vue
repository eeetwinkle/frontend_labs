<script setup>
import { mockContacts } from '~/mock/contacts'

const { phone, email, address } = mockContacts

defineProps({
  theme: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <div class="sections contacts-list" :class="theme">
    <ul>
      <li>
        <a :href="`tel:${phone.value}`" class="contact-phone">
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

<style lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.sections.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-title;
}

.sections.contacts-list ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.sections.contacts-list li {
  list-style: none;
}

.contact,
.contact-phone {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact.address {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.text {
  font-size: 14px;
  line-height: 17px;
  white-space: pre-line;
}

.footer .sections.contacts-list {
  grid-area: contacts;

  @include mixins.small {
    align-items: flex-start;
  }
}

.footer .contact,
.footer .contact-phone {
  color: vars.$color-white;
}

.footer .contact.address {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.contact-page .sections.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-title;

  @include mixins.small {
    gap: 24px;
  }
}

.contact-page .sections.contacts-list ul {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  margin: 0;
  list-style: none;

  @include mixins.small {
    gap: 24px;
  }
}

.contact-page .contact{
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-top: 16px;
    text-decoration: none;
    color: vars.$color-black;
    @include mixins.small {
      margin-top: 0;
    }
}

.contact-page .contact-phone {
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  text-decoration: none;
  color: vars.$color-black;
}

.contact-page .contact.address {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.contact-page .icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
  @include mixins.small {
    width: 16px;
    height: 16px;
  }
}

.contact-page .text {
  font-size: 20px;
  line-height: 24px;
  color: vars.$color-black;
  white-space: pre-line;
  text-align: left;

  @include mixins.small {
    font-size: 16px;
    line-height: 19px;
  }
}

.contact-page .contact.address .text {
  text-align: left;
  display: inline-block;
}
</style>