<template>
<h2>Фото блюд</h2>
  <swiper-wrapper
    grab-cursor
    centered-slides
    loop
    :speed="800"
    :slides-per-view="4.5"
    :space-between="20"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
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
import {  Autoplay } from "swiper";
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
h2{
  @include style-h2;
  padding-top: 120px;
  padding-bottom: 30px;
}
</style>
