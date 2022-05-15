<template>
  <header class="header container">
    <div class="header__logo">
      <img class="header__logo-img" src="@/assets/img/logo.svg" alt="logo" />
      <p class="header__logo-txt">healthy ration</p>
    </div>
    <div class="header__blok">
      <nav class="header__blok-nav">
        <router-link to="/" class="link">Програмы питания</router-link>
        <router-link to="/lunches" class="link">Бизнес-ланчи</router-link>
        <router-link to="/about" class="link">О нас</router-link>
        <a class="link" href="#">Заказать</a>
        <router-link to="/blog" class="link">Блог</router-link>
      </nav>
      <a class="header__blok-number" href="tel:+38(068)949-49-19">+38 (068) 949-49-19</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.header {
  position: relative;
  z-index: 1;
  top: -47px;
  left: -16px;
  display: flex;
  align-items: center;
  &__logo {
    z-index: 2;
    max-width: 264px;
    min-height: 264px;
    border-radius: 50%;
    @include white-block-shadow;
    img {
      padding-top: 62px;
    }
    &-txt {
      font-family: $font-comfortaa;
      font-weight: 400;
      text-align: center;
      font-size: 14px;
    }
  }
  &__blok {
    display: flex;
    justify-content: space-between;
    width: 956px;
    position: absolute;
    z-index: 1;
    left: 240px;
    top: 98px;
    &-nav {
      @include white-block-shadow;
      border-radius: 0 190px 190px 0;
      padding: 17px 0;
      .link:first-child {
        padding-left: 57px;
      }
      .link {
        padding: 0px 20px;
        font-family: $font-montserrat;
        font-weight: 400;
        font-size: 14px;
        color: $txt-color;
        transition: all 0.3s ease-out;
      }
      .link:hover {
        color: $them-color;
        font-weight: 500;
      }
      .link:active {
        color: $circle-color;
        font-weight: 500;
      }
    }

    &-number {
      width: 280px;
      @include white-block-shadow;
      border-radius: 190px;
      font-family: $font-montserrat;
      font-weight: 700;
      font-size: 20px;
      padding: 14px 30px;
      color: $them-color;
      transition: all 0.3s ease-out;
    }

    &-number:hover {
      color: $blok-txt-color;
      background: $them-color;
      border: 3px solid $blok-txt-color;
      padding: 12px 28px;
      box-shadow: drop-shadow(0px 0px 40px rgba(86, 86, 86, 0.3));
    }
  }
}
</style>
