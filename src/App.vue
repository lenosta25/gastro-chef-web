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

.container-main {
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 50px;
}

.container {
  max-width: 1220px;
  margin: 0 auto;
}

#bg-circles {
  overflow: hidden;
  height: 4281px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
