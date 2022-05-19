<template>
  <h2>Фото блюд</h2>
  <swiper-wrapper
    grabCursor
    centered-slides
    loop
    :speed="800"
    :slides-per-view="1"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '700': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '820': {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
      '950': {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },

      '1000': {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      '1100': {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      
      '1420': {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
      '1680': {
        slidesPerView: 3.9,
        spaceBetween: 20,
      },
      '1763': {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
      '1920': {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide>
      <img src="@/assets/img/swiper-first.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/swiper-second.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/swiper-third.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/swiper-fourth.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/swiper-second.png" alt="" />
    </swiper-slide>
  </swiper-wrapper>
</template>
<script>
import { Swiper as SwiperWrapper, SwiperSlide } from "swiper/vue";
import { Autoplay} from "swiper";
import "swiper/scss";
import "swiper/scss/autoplay";

export default {
  components: {
    SwiperWrapper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
h2 {
  padding-top: 120px;
  padding-bottom: 30px;
}
@media (max-width: 1880px) {
  img {
    width: 380px;
  }
}
@media (max-width: 835px) {
  img {
    width: 320px;
  }
}
@media (max-width: 570px) {
  img {
    width: 300px;
  }
}
@media (max-width: 400px) {
  img {
    width: 240px;
  }
}
</style>
