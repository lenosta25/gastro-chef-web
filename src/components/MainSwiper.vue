<template>
  <swiper-wrapper
    :slides-per-view="1"
    :space-between="30"
    loop
    effect="fade"
    :fade-effect="{ crossFade: true }"
    :speed="800"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    }"
    @mouseenter="stopSwip($event)" 
    @mouseleave="startSwip($event)"
  >
    <swiper-slide>
      <div class="slide">
        <div class="slide__content">
          <h1>Detox программа – <br><span> вкусное очищение </span> организма</h1>
          <p class="slide-txt">8 бутылочек натуральных смузи и фрешей.</p>
          <div class="alignment-row">
            <button class="green-btn">Заказать</button>
            <div class="alignment-col">
              <p class="slide-txt">Пробный день всего:</p>
              <p>427 грн</p>
            </div>
          </div>
        </div>
        <img
          class="slide__img"
          src="@/assets/img/header-swiper-first.png"
          alt="smoothie bottle"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <div class="slide__content">
          <h1>Сервис правильного питания.<span><br> Худей быстро!</span></h1>
          <div class="alignment-row">
            <button class="green-btn">Заказать</button>
            <div class="alignment-col">
              <p class="slide-txt">Пробный день</p>
              <p>-30%</p>
            </div>
          </div>
        </div>
        <img src="@/assets/img/header-swiper-second.png" alt="food" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <div class="slide__content">
          <h1>
            <span>Доверьтесь профессионалам.</span><br> Я Кобылинский Кирилл -
            основатель.
          </h1>
          <p class="slide-txt">
            <span>Мастер спорта</span> Украины по тяжелой атлетике.
            <span>Высшее образование</span> института физкультуры(НуфвсУ).
          </p>
          <div class="alignment-row">
            <button class="green-btn">Мой инстаграм</button>
          </div>
        </div>
        <img src="@/assets/img/header-swiper-third.png" alt="man" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <div class="slide__content">
          <h1>
            Кето питание - <span>вкусное <br> и экстремальное </span> быстрое
            похудение
          </h1>
          <p class="slide-txt">4 приема пищи.</p>
          <div class="alignment-row">
            <button class="green-btn">Заказать</button>
            <div class="alignment-col">
              <p class="slide-txt">Пробный день</p>
              <p>от 490грн</p>
            </div>
          </div>
        </div>
        <img src="@/assets/img/header-swiper-fourth.png" alt="salmon" />
      </div>
    </swiper-slide>

  </swiper-wrapper>
</template>

<script>
import { Swiper as SwiperWrapper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";

export default {
  components: {
    SwiperWrapper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
    };
  },
  methods: {
    stopSwip(event) {
        event.target.swiper.autoplay.stop();
    },
    startSwip(event) {
        event.target.swiper.autoplay.start();
    },
  }, 
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__content {
    max-width: 609px;
    padding-left: 72px;
    padding-bottom: 53px;
    h1 {
      font-family: $font-comfortaa;
      font-weight: 700;
      font-size: 40px;
      line-height: 45px;
      color: $txt-color;
      padding-bottom: 15px;
    }
    span {
      color: $them-color;
    }
    .slide-txt {
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: $txt-color;
    }
    .alignment-row {
      padding-top: 45px;
      display: flex;
      gap: 30px;
    }
    .alignment-col {
      display: flex;
      flex-direction: column;
      p:last-child {
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 35px;
        line-height: 35px;
        color: $them-color;
      }
    }
    .green-btn {
      @include green-btn-inactive;
    }
    .green-btn:hover {
      @include green-btn-hover;
    }
  }
  img {
    border-radius: 50%;
    border: 31px solid $blok-txt-color;
  }
}
@media (max-width:1800px) {
  img{
    width: 600px;
  }
}
@media (max-width:1635px) {
  img{
    width: 580px;
  }
  .slide__content h1{
    font-size: 36px;
    line-height: 39px;
  }
}
// @media (max-width:1500px) {
//   img{
//     width: 500px;
//   }
//   h1{
//     font-size: 30px;
//   }
//   .green-btn{
//     font-size: 20px;
//   }
// }
// @media (max-width:1420px) {
//   img{
//     width: 450px;
//   }
// }

</style>
