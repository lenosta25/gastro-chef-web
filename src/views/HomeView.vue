<template>
  <div class="block-alignment">
    <aside-nav />
    <main-swiper />
  </div>
  <advantage-block />
   <menu-food-delivery/>
  <gallery-swiper />
 
</template>

<script>
import AsideNav from '../components/AsideNav.vue';
import MainSwiper from '../components/MainSwiper.vue';
import AdvantageBlock from '../components/AdvantageBlock.vue';
import MenuFoodDelivery from '../components/section-menu/MenuFoodDelivery.vue';
import GallerySwiper from '../components/GallerySwiper.vue';

export default {
  components: {
    AsideNav,
    MainSwiper,
    AdvantageBlock,
    MenuFoodDelivery,
    GallerySwiper,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.block-alignment {
  display: flex;
}
</style>