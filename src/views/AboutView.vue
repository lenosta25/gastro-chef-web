<template>
  <div class="block-alignment">
    <aside-nav />
    <about-info />
  </div>
  <about-history />
  <img src="@/assets/img/team.png" alt="team">
  <about-delivery/>
  <gallery-swiper />
  <div class="block-order-question container">
    <order-form />
    <accordion-questions />
  </div>
</template>

<script>
import AsideNav from "../components/AsideNav.vue";
import AboutInfo from "../components/section-about/AboutInfo.vue";
import AboutHistory from "../components/section-about/AboutHistory.vue";
import AboutDelivery from "../components/section-about/AboutDelivery.vue";
import GallerySwiper from "../components/GallerySwiper.vue";
import OrderForm from "../components/OrderForm.vue";
import AccordionQuestions from "../components/AccordionQuestions.vue";

export default {
  components: {
    AsideNav,
    AboutInfo,
    AboutHistory,
    AboutDelivery,
    GallerySwiper,
    OrderForm,
    AccordionQuestions,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
img {
  z-index: 2;
  position: relative;
  padding-top: 124px;
  max-width: 100%;
}
</style>
