<template>
  <div class="block-alignment">
    <aside-nav />
    <main-swiper />
  </div>
  <advantage-block />
  <menu-food-delivery />
  <gallery-swiper />
  <div class="block-order-question container">
    <order-form />
    <accordion-questions />
  </div>
</template>

<script>
import AsideNav from "../components/AsideNav.vue";
import MainSwiper from "../components/MainSwiper.vue";
import AdvantageBlock from "../components/AdvantageBlock.vue";
import MenuFoodDelivery from "../components/section-menu/MenuFoodDelivery.vue";
import GallerySwiper from "../components/GallerySwiper.vue";
import OrderForm from "../components/OrderForm.vue";
import AccordionQuestions from "../components/AccordionQuestions.vue";

export default {
  components: {
    AsideNav,
    MainSwiper,
    AdvantageBlock,
    MenuFoodDelivery,
    GallerySwiper,
    OrderForm,
    AccordionQuestions,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
