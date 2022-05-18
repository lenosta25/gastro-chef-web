<template>
  <div id="bg-circles">
    <div class="container-main">
      <circles-page />
      <main-header />
      <router-view />
    </div>
    <main-footer />
  </div>
</template>

<script>
import CirclesPage from './components/CirclesPage.vue';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue'


export default {
  name: "App",
  components: {
    CirclesPage,
    MainHeader,
    MainFooter
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";

#bg-circles {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
