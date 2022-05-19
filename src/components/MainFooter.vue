<template>
  <footer>
    <div class="footer container">
      <div class="footer__nav">
        <router-link to="/" class="footer__nav-link"
          >Програмы питания</router-link
        >
        <router-link to="/about" class="footer__nav-link">О нас</router-link>
        <router-link to="/lunches" class="footer__nav-link"
          >Бизнес-ланчи</router-link
        >
        <a class="footer__nav-link" href="#">Заказать</a>
        <router-link to="/blog" class="footer__nav-link">Блог</router-link>
      </div>
      <div hrf="#" class="footer__logo">
        <img class="footer__logo-img" src="@/assets/img/logo.svg" alt="logo" />
        <p class="footer__logo-txt">сервис здорового питания</p>
      </div>
      <div class="footer__cooperation">
        <p class="footer__cooperation-txt">Условия сотрудничества</p>
        <p class="footer__cooperation-txt">FAQ</p>
        <div class="footer__cooperation-social_media">
          <a
            class="social-icon"
            href="https://www.instagram.com/gastrochef.kyiv/"
            target="_blank"
            ><i class="icon-instagram"> </i
          ></a>
          <a
            class="social-icon"
            href="https://www.facebook.com/gastrochef.kyev"
            target="_blank"
            ><i class="icon-facebook"></i
          ></a>
          <a
            class="social-icon"
            href="viber://chat?number=%2B380689494919"
            target="_blank"
          >
            <i class="icon-viber"></i>
          </a>
          <a
            class="social-icon"
            href="tg://resolve?domain=GastroChef_kyev"
            target="_blank"
            ><i class="icon-telegram"></i
          ></a>
        </div>
        <a class="footer__cooperation-number" href="tel:+38(068)949-49-19"
          >+38 (068) 949-49-19</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
footer {
  z-index: 2;
  width: 100%;
  box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);
  background: $blok-txt-color;
  margin-bottom: 100px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &__nav {
    display: flex;
    flex-direction: column;
    padding: 41px 0 27px 0;
    &-link {
      padding-bottom: 17px;
      font-family: $font-comfortaa;
      font-weight: 700;
      font-size: 20px;
      color: $txt-color;
    }
    &-link:hover {
      color: $them-color;
    }
    &-link:active {
      color: $circle-color;
    }
  }
  &__logo {
    &-txt {
      font-family: $font-comfortaa;
      font-weight: 400;
      font-size: 20px;
      color: $txt-color;
      text-align: center;
    }
  }
  &__cooperation {
    width: 227px;
    text-align: right;
    &-txt {
      padding-bottom: 20px;
      line-height: 22px;
      font-family: $font-comfortaa;
      font-weight: 700;
      font-size: 20px;
      color: $txt-color;
    }
    &-social_media {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 15px;
      
      .social-icon {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        background: $them-color;
        border-radius: 50%;
        margin-left: 15px;
        box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
        color: $blok-txt-color;
      }
      .social-icon:hover{
        @include green-btn-hover;
        box-shadow: 0px 0px 5px $circle-color;
        border: none;
      }
    }
    &-number {
      font-family: $font-montserrat;
      font-weight: 700;
      font-size: 20px;
      color: $them-color;
    }
  }
}
</style>
