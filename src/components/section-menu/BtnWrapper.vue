<template >
   <div class="menu-btns">
      <ul class="menu-btns__header">
         <li 
         :class="{ selected: title == selectedTitle}"
         v-for="title in btnTitles" 
         :key="title" 
         @click="selectedTitle = title"
         >
            {{ title }}
         </li>
      </ul>
      <slot></slot>
      
   </div>
</template>
<script>
import { ref, provide } from 'vue'
export default {
   setup(props, { slots }) {
      const btnTitles = ref(slots.default().map((btn) => btn.props.title))
      const selectedTitle = ref(btnTitles.value[0])
      provide("selectedTitle", selectedTitle)
      return {
         selectedTitle,
         btnTitles,
      }
   }
}
</script>
<style lang="scss">
@import "@/assets/style.scss";
.menu-btns {
   &__header {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 41px;
      li{
         border-radius: 190px;
         padding: 17px 143px;
         background: $form-color;
         text-align: center;
         color: $txt-color;
         font-family: $font-comfortaa;
         font-weight: 700;
         font-size: 25px;
         cursor: pointer;
         transition: 0.4s all ease-out;
      }
      li.selected{
         background: $them-color;
         color: $blok-txt-color;
         box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
      }
   }
}
</style>