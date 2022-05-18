<template >
   <div class="menu-tabs">
      <ul class="menu-tabs__header">
         <li 
         :class="{ selected: title == selectedTitle}"
         v-for="title in tabTitles" 
         :key="title" 
         @click="selectedTitle = title"

         >
            {{ title}}
         </li>
      </ul>
      <slot></slot>
   </div>
</template>
<script>
import { ref, provide } from 'vue'
export default {
   setup(props, { slots }) {
      const tabTitles = ref(slots.default().map((tab) => tab.props.title))
      const selectedTitle = ref(tabTitles.value[0])
      provide("selectedTitle", selectedTitle)

      return {
         selectedTitle,
         tabTitles,
      }
   },
}
</script>
<style lang="scss">
@import "@/assets/style.scss";
.menu-tabs {
   &__header {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 41px;
      z-index: 2;
      li{
         background: none;
         font-family: $font-comfortaa;
         font-weight: 700;
         font-size: 18px;
         text-transform: uppercase;
         color: $txt-color;
         cursor: pointer;
         transition: 0.4s all ease-out;
      }
      li.selected{
         color: $them-color;
      }
   }
}
</style>