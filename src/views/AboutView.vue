<template>
  <aside-nav />
  <gallery-swiper />
  <div class="block-order-question container">
    <order-form />
    <accordion-questions />
  </div>
</template>

<script>
import AsideNav from "../components/AsideNav.vue";
import GallerySwiper from "../components/GallerySwiper.vue";
import OrderForm from "../components/OrderForm.vue";
import  AccordionQuestions from "../components/AccordionQuestions.vue";

export default {
  components: {
    AsideNav,
    GallerySwiper,
    OrderForm,
    AccordionQuestions,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
