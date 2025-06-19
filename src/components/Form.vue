<script setup lang="ts">
import {reactive, ref} from 'vue'
import Button from './Button.vue';
import { vMaska } from 'maska/vue';
import * as yup from 'yup'

let isChecked = ref(true)

const form = reactive({
  name: '',
})
const errors = reactive<{ [key: string]: string }>({})
const schema = yup.object().shape({
  name: yup.string()
  .required('Пожалуйста, введите ваше имя')
  .min(2, 'Имя должно содержать минимум два символа')
  .max(15, 'Слишком длинное имя')
//   .matches(/^[А-Яа-яЁёA-Za-z\s'-]+$/, 'Имя содержит недопустимые символы'),
  .matches(/^[А-Яа-яЁёA-Za-z'-]+$/, 'Имя не должно содержать пробелов'),
})
const sendForm = async () => {
  // очищаем ошибки
  Object.keys(errors).forEach(key => delete errors[key])

  try {
    // валидируем только поле "name" (можно расширить)
    await schema.validate({ name: form.name }, { abortEarly: false })
    
    // Если прошли валидацию — можно отправлять данные или показывать сообщение
    alert('Заявка отправлена. ')
  } catch (validationError) {
    if (validationError.inner) {
      validationError.inner.forEach((err: any) => {
        errors[err.path] = err.message
      })
    }
  }
}

</script>
<template>
<div class="form-container">
    <h3 class="form-container__title">Получить индивидуальное предложение на покупку в кредит от 4.9%</h3>
    <div class="inputs">
      <div class="input__block input__block-name">
      <label class="label" for="name">имя</label>
      <input class="input" type="text" id="name" placeholder="Введите ваше имя" v-model="form.name">
      <div v-if="errors.name" style="color: red;">{{ errors.name }}</div>
    </div>
    <div class="input__block">
      <label class="label" for="tel">телефон</label>
      <input class="input" type="tel" placeholder="+7 (___) ___-__-__" id="tel" v-maska="'+# (###) ###-##-##'">
    </div>
    </div>
    
    <div class="checkbox-wrapper">
        <input class="checkbox" type="checkbox" checked id="checkbox" v-model="isChecked">
        <label class="label-checkbox" for="checkbox">Я принимаю <span class="label-checkbox__rules">условия передачи информации</span></label>
    </div>
    
    <Button :class="{'button__desabled': !isChecked}" 
    :label="'Оставить заявку'"
    class="button__request btn"
    type="submit"
    @click.prevent="sendForm"/>
</div>

</template>

<style scoped lang="less">
.form-container {
  box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 415px;
    height: 555px;
    padding: 30px;
    border-radius: 16px;
    background-color: #E1E0DC;
}

.form-container__title {
  margin: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #0a0a0a;
}

.label {
  margin-bottom: 3px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 5%;
  text-transform: uppercase;
  color: #0a0a0a;
}

.input {
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 8px;
  border-width: 1px;
  background-color: #fff;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #0A0A0A99;
  }
}

.my-button {
    width: 200px;
}
.checkbox-wrapper {
  position: relative;
    display: flex;
    padding-top: 8px;
    margin-bottom: 28px;
    align-items: baseline;
}

.checkbox {
  position: absolute;
  top: 15px;
  left: 1px;
  margin: 0;
  margin-right: 13px;
  width: 25px;
  height: 25px;
  opacity: 0;
}

.label-checkbox::after {
  content: '';
  position: absolute;
  
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  top: 13px;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
}

.checkbox:checked + .label-checkbox::after {
  background-image: url('/icons.png');
  background-color: #0a0a0a;
}

.label-checkbox {
  width: 80%;
  padding-top: 10px;
  padding-left: 38px;
  font-weight: 400;
  font-size: 18px;
  line-height: 127%;
  color: #0a0a0a;
}

.label-checkbox__rules {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
}

@media (max-width: 1440px) {
  .form-container {
    width: 360px;
    height: 461px;
    padding: 25px;
  }
  .form-container__title {
    margin-bottom: 36px;
    padding-top: 4px;
    font-size: 20px;
    line-height: 140%;
  }
  .input {
    height: 50px;
    margin-bottom: 22px;
    padding-left: 13px;
    &::placeholder {
      font-size: 14px;
    }
  }
  .label-checkbox {
    width: 100%;
    padding-left: 29px;
    font-size: 14px;
    padding-top: 5px;
    & span {
      font-size: 14px;
    }
    &::after {
      width: 18px;
      height: 18px;
      top: 5px;
    }

  }

  .checkbox-wrapper {
    padding-top: 0;
    margin-bottom: 20px;
  }
}

@media (max-width:768px) {
  .form-container {
    width: 100.5%;
    height: 265px;
    padding: 28px;
  }
  .form-container__title  {
    margin-bottom: 26px;
    font-size: 18px;
  }

  .inputs {
    display: flex;
    margin-bottom: 20px;
  }

  .input__block {
    width: 48%;
  }

  .input__block-name {
    margin-right: 23px;
  }
}

@media(min-width: 320px) and (max-width: 768px) {
  .form-container__title {
    margin-bottom: 18px;
    font-size: 16px;
  }
  .form-container {
    height: 420px;
    padding: 18px;
  }

  .inputs {
    flex-direction: column;
    margin-bottom: 0;
  }

  .input__block {
    width: 100%;
  }
  .label-checkbox {
    padding-top: 0;
  }
}
</style>