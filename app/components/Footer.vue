<template>
  <footer class="footer">
    <img src="../assets/images/logo-footer.svg" class="logo" />

    <ul class="sections">
      <li>Реализованные проекты</li>
      <li>Новости</li>
      <li>Контакты</li>
    </ul>

    <ul class="sections contacts-list">
      <li>
        <a href="tel:+79009009090" class="contact">
          <img src="~/assets/images/phone.svg" class="icon" />
          <span class="text">+7 (900) 900-90-90</span>
        </a>
      </li>

      <li>
        <a href="mailto:info@gmail.com" class="contact">
          <img src="~/assets/images/mail.svg" class="icon" />
          <span class="text">info@gmail.com</span>
        </a>
      </li>

      <li>
        <div class="contact address">
          <img src="~/assets/images/location.svg" class="icon" />
          <span class="text">
            г. Владивосток<br />
            ул. Выселковая 49, стр. 3
          </span>
        </div>
      </li>
    </ul>

    <Button class="make-request">Оставить заявку</Button>

    <div class="bottom-text">© Загдом, 2021</div>
    <div class="bottom-text">Политика конфиденциальности</div>
    <div class="bottom-text">Пользовательское соглашение</div>
    <div></div>
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as vars;

.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 32px;
  padding: 37px 88px;
  background: vars.$color-footer;
  color: vars.$color-white;
  margin-top: auto;
}

.logo {
  width: 160px;
  height: 39px;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 19px;
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

.btn {
  justify-self: end;
}

.bottom-text {
  font-size: 14px;
  opacity: 0.6;
  font-family: vars.$font-base;
}

.make-request{
  width: 204px;
  height: 49px;
  font-size: 14px;
  color: vars.$color-white;
  background-color: vars.$color-green;
  font-family: vars.$font-title;
  border-radius: 10px;
  border-color: vars.$color-footer;
}
</style>