<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { vMaska } from "maska/vue";

const validationSchema = toTypedSchema(
    yup.object({
      name: yup.string().required('Обязательное поле'),
      phone: yup.string().min(18, 'Некорректный номер').required('Обязательное поле'),
      message: yup.string().optional(),
    })
);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema,
});

const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert('Заявка успешно отправлена!');
});
</script>

<template>
  <form class="form" @submit="onSubmit">
    <div class="field-group">
      <input
          v-model="name"
          v-bind="nameAttrs"
          class="input"
          :class="{ 'error-border': errors.name }"
          type="text"
          placeholder="Имя"
      />
      <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
    </div>

    <div class="field-group">
      <input
          v-model="phone"
          v-bind="phoneAttrs"
          v-maska
          data-maska="+7 (###) ###-##-##"
          class="input"
          :class="{ 'error-border': errors.phone }"
          type="tel"
          placeholder="Телефон"
      />
      <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
    </div>

    <div class="field-group">
      <textarea
          v-model="message"
          v-bind="messageAttrs"
          class="input-message"
          placeholder="Сообщение"
          rows="3"
      ></textarea>
    </div>

    <div class="submit-block">
      <Button type="submit" class="make-request">Оставить заявку</Button>
    </div>

    <p class="agreement-text">
      Нажимая на кнопку «Отправить», вы принимаете

      <a href="/user-agreement" class="link">пользовательское соглашение</a>
      и
      <a href="/privacy-policy" class="link">политику конфиденциальности</a>
    </p>
  </form>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;

@use "~/assets/scss/mixins" as mixins;

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.field-group {
  display: flex;
  flex-direction: column;
  position: relative;
}
.input {
  height: 58px;
  width: 384px;
  color: vars.$color-gray;
  font-family: vars.$font-base;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0);
  margin-top: 25px;
  padding: 0 16px;
  box-sizing: border-box;
  font-size: 16px;
  justify-content: start;

  &::placeholder {
    color: vars.$color-gray;
  }
  @include mixins.small {
    font-size: 12px;
    height: 45px;
    margin-top: 20px;
    width: 200px;
  }
}


.input-message {
  margin-top: 25px;
  height: 100px;
  width: 384px;
  color: vars.$color-gray;
  font-family: vars.$font-base;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  resize: vertical;
  &::placeholder {
    color: vars.$color-gray;
  }
  @include mixins.small {
    font-size: 12px;
    height: 80px;
    margin-top: 20px;
    width: 200px;
  }
}

.textarea {
  resize: none;
}

.error-border {
  box-shadow: 0 0 0 1px red;
}

.error-text {
  font-size: 12px;
  color: red;
  margin-top: 4px;
  padding-left: 4px;
}

.submit-block {
  margin-top: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
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
  border-color: rgba(0,0,0,0);
  justify-self: end;
  margin-top: 20px;
  &:hover {
    background-color: vars.$color-footer;
    color: vars.$color-green;
  }
}

.agreement-text {
  margin-top: 10px;
  text-align: center;
  color: vars.$color-gray;
  font-family: vars.$font-base;
  font-size: 14px;
  line-height: 1.4;
  width: 100%;
  max-width: 384px;
  @include mixins.small {
    font-size: 10px;
  }
}

.link {
  color: vars.$color-green;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>