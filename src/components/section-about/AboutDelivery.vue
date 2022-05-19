<template>
  <div class="about-delivery">
    <section class="about-delivery__section">
      <h2>«GastroChef - легко для занятых»</h2>
      <p class="about-delivery__section-txt">
        GastroChef - правильное питание с доставкой на дом, создано что бы
        облегчить жизнь, освободить время от готовки, от ненужных перекусов,
        фастфудов и дать возможность чувствовать себя легко и полным энергии,
        сил, для новых свершений и побед.
      </p>
      <p class="about-delivery__section-txt">
        Все продукты для приготовления правильного питания закупаются только с
        сертификатами, а рационы готовятся на современной и безопасной кухне
        ночью перед приездом к Вам!
      </p>
      <p class="about-delivery__section-txt">
        Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам
        или написать мне лично в Инстаграм или Фейсбук.
      </p>
      <h2>С уважением, Кобылинский Кирилл.</h2>
      <div class="social-media">
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
        <p>- Я в социальных сетях</p>
      </div>
    </section>
    <img src="@/assets/img/food.png" alt="food" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";

.about-delivery {
  padding-top: 111px;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  &__section {
    max-width: 664px;
    padding-left: 70px;
    h2 {
      text-align: start;
      padding-bottom: 40px;
    }
    &-txt {
      font-family: $font-comfortaa;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      padding-bottom: 20px;
      text-align: justify;
    }
    .social-media {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .social-icon {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        height: 40px;
        width: 40px;
        background: $them-color;
        border-radius: 50%;
        margin-left: 15px;
        box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
        color: $blok-txt-color;
      }
      .social-icon:hover {
        @include green-btn-hover;
        box-shadow: 0px 0px 5px $circle-color;
        border: none;
      }
      p {
        padding-left: 20px;
        font-family: $font-comfortaa;
        font-weight: 300;
        font-size: 20px;
      }
    }
  }
  img {
    z-index: 1;
    max-width: 100%;
  }
}
</style>
