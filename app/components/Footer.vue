<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const isModalOpen = ref(false)
</script>

<template>
  <footer class="footer">
    <img src="../assets/images/logo-footer.svg" class="logo" alt="Logo"/>

    <ul class="sections">
      <li>Реализованные проекты</li>
      <li>Новости</li>
      <li>Контакты</li>
    </ul>

    <ul class="sections contacts-list">
      <li>
        <a href="tel:+79009009090" class="contact">
          <img src="~/assets/images/phone.svg" class="icon" alt="Phone"/>
          <span class="text">+7 (900) 900-90-90</span>
        </a>
      </li>

      <li>
        <a href="mailto:info@gmail.com" class="contact">
          <img src="~/assets/images/mail.svg" class="icon" alt="Email"/>
          <span class="text">info@gmail.com</span>
        </a>
      </li>

      <li>
        <div class="contact address">
          <img src="~/assets/images/location.svg" class="icon" alt="Location"/>
          <span class="text">
            г. Владивосток<br />
            ул. Выселковая 49, стр. 3
          </span>
        </div>
      </li>
    </ul>
    <button class="make-request" @click="isModalOpen = true">Оставить заявку</button>

    <div class="info">
      <div class="bottom-text">© Загдом, 2021</div>
      <div class="bottom-text">Политика конфиденциальности</div>
      <div class="bottom-text">Пользовательское соглашение</div>
    </div>

    <Modal v-model:open="isModalOpen" />
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "logo nav contacts btn"
    "legal legal legal legal";
  gap: 32px;
  padding: 37px 88px;
  background: vars.$color-footer;
  color: vars.$color-white;
  margin-top: auto;
  @include mixins.large {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo btn"
      "nav contacts"
      "legal legal";
    padding: 37px 32px;
    gap: 40px;
  }

  @include mixins.small {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "nav"
      "contacts"
      "btn"
      "legal";
    padding: 40px 24px;
    justify-items: start;
    text-align: left;
    gap: 32px;
  }
}

.logo {
  grid-area: logo;
  width: 160px;
  height: 39px;

  @include mixins.small {
    margin-bottom: 8px;
  }
}

.sections {
  grid-area: nav;
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
.contacts-list {
  grid-area: contacts;
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
}

.icon {
  width: 16px;
  height: 16px;
}

.bottom-text {
  font-size: 14px;
  opacity: 0.6;
  font-family: vars.$font-base;
  @include mixins.small {
    font-size: 12px;
  }
}

.make-request{
  grid-area: btn;
  width: 204px;
  height: 49px;
  font-size: 14px;
  color: vars.$color-white;
  background-color: vars.$color-green;
  font-family: vars.$font-title;
  border-radius: 10px;
  border-color: vars.$color-footer;
  justify-self: end;
  @include mixins.large {
    justify-self: start;
  }

  @include mixins.small {
    justify-self: start;
    width: 100%;
    max-width: 204px;
    margin-top: 8px;
  }
}
.info {
  grid-area: legal;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @include mixins.large {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 30px;
    margin-top: 20px;
  }

  @include mixins.small {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }
}
.contact {
  color: vars.$color-white;
  text-decoration: none;
}
</style>