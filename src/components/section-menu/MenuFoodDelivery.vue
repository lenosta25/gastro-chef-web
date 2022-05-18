<template>
  <btn-wrapper>

    <btn-item title="Программы питания">
      <tab-wrapper>

        <tab-item title="fitness" >cjyntyn</tab-item>

        <tab-item title="slim">slim</tab-item>
        <tab-item title="fitness">fitness</tab-item>
        <tab-item title="balance">balance</tab-item>
        <tab-item title="balance +">balance +</tab-item>
        <tab-item title="strong">strong</tab-item>
        <tab-item title="maxi fit">maxi fit</tab-item>
      </tab-wrapper>
    </btn-item>
    <btn-item title="Специальные программы">
      <tab-wrapper>
        <tab-item title="keto"> 1400 </tab-item>
        <tab-item title="keto +"> 1800</tab-item>
        <tab-item title="диетаа №5">Диета5</tab-item>
      </tab-wrapper>
    </btn-item>
  </btn-wrapper>
</template>

<script>
import BtnWrapper from "./BtnWrapper.vue";
import BtnItem from "./BtnItem.vue";
import TabWrapper from "./TabWrapper.vue";
import TabItem from "./TabItem.vue";

export default {
  components: {
    BtnWrapper,
    BtnItem,
    TabWrapper,
    TabItem,
  },
   data(){
    return {menuNuutrionProgram: []}
  },
  async created(){
    const response =await fetch('/menu-nuutrion-program.json');
    this.menuNuutrionProgram =await response.json()
  }
};
</script>

<style lang="scss">
@import "@/assets/style.scss";

</style>
