<template>
  <form class="form">
    <h2>Форма заказа</h2>
    <p>
      После заполнения формы с вами свяжиться наш сотрудник, что бы уточнить все
      дитали заказа.
    </p>
    <div class="form__grup">
      <label for="name">Имя </label>
      <input id="name" type="text" v-model.trim="form.name" required />
    </div>
    <div class="form__grup">
      <label for="tel">Номер телефона</label>
      <input
        type="tel"
        id="tel"
        v-model.trim="form.tel"
        pattern="^[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}$"
        placeholder="+380 __ ___ ____"
        required
      />
    </div>
    <div class="form__grup">
      <label id="program">Программа питания:</label>
      <select for="program" v-model="form.program">
        <option
          v-for="(program, index) in programs"
          :key="index"
          :vulue="program.vulue"
        >
          {{ program.label }}
        </option>
      </select>
    </div>
    <div class="form__checkbox">
      <label class="form__checkbox-label" for="agree-discount">
        <input
        class="form__checkbox-input"
        type="checkbox"
        id="agree-discount"
        v-model="form.agreeDiscount"
      />
      <span class="fake"></span>
        Тест-день! Получить скидку -30%?
      </label>
    </div>
    <div class="form__checkbox">
      <label class="form__checkbox-label" for="agree-cooperation">
        <input
          class="form__checkbox-input"
          type="checkbox"
          id="agree-cooperation"
          v-model="form.agreeCooperation"
        />
        <span class="fake"></span>
        Согласен с<a class="link" href="#"> условиями сотрудничества</a>
      </label>
    </div>
    <button class="form__btn" type="submit">Оформить заказ</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        tel: "",
        program: "Express Fit (800 ккал)",
        agreeDiscount: true,
        agreeCooperation: true,
      },
      programs: [
        {
          label: "Express Fit (800 ккал)",
          value: "Express Fit (800 ккал)",
        },
        {
          label: "Slim (1000 ккал)",
          value: "Slim (1000 ккал)",
        },
        {
          label: "Fitness(1300 ккал)",
          value: "Fitness(1300 ккал)",
        },
        {
          label: "Balance (1600 ккал)",
          value: "Balance (1600 ккал)",
        },
        {
          label: "Balance+ (1800 ккал)",
          value: "Balance+ (1800 ккал)",
        },
        {
          label: "Strong (2000 ккал)",
          value: "Strong (2000 ккал)",
        },
        {
          label: "Maxi fit (2400 ккал)",
          value: "Maxi fit (2400 ккал)",
        },
        {
          label: "Keto (1400 ккал)",
          value: "Keto (1400 ккал)",
        },
        {
          label: "Keto (1800 ккал)",
          value: "Keto (1800 ккал)",
        },
        {
          label: "Диета №5",
          value: "Diet №5",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.form {
  display: flex;
  flex-direction: column;
  max-width: 418px;
  z-index: 2;
  p {
    text-align: center;
    font-family: $font-montserrat;
    font-weight: 400px;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 30px;
  }
  &__grup {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    label {
      padding-left: 20px;
      padding-bottom: 5px;
      font-family: $font-comfortaa;
      font-weight: 700;
      color: $them-color;
      font-size: 18px;
    }
    input,
    select {
      background: $form-color;
      border-radius: 190px;
      font-family: $font-montserrat;
      font-weight: 400;
      font-size: 16px;
      padding: 10px 20px 9px 20px;
    }
  }
  &__checkbox {
    padding-bottom: 20px;
    &-input {
      display: none;
    }
    .fake {
      display: inline-block;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background: $form-color;
      position: relative;
    }
    .fake::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background: $them-color;
      opacity: 0;
      transition: 0.2s;
    }
    &-input:checked + .fake::before {
      opacity: 1;
    }
    &-label {
      font-family: $font-comfortaa;
      font-weight: 700;
      color: $txt-color;
      font-size: 16px;
      padding-left: 20px;
      cursor: pointer;

      .link {
        color: $them-color;
      }
    }
  }
  &__btn {
    margin-top: 12px;
    @include green-btn-inactive;
  }

  &__btn:hover {
    @include green-btn-hover;
  }
}
</style>
