<template >
   <div class="days-week">
      <ul class="days-week__header">
         <li 
         :class="{ selected: title == selectedTitle}"
         v-for="title in tabDayTitles" 
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
      const tabDayTitles = ref(slots.default().map((tabDay) => tabDay.props.title))
      const selectedTitle = ref(tabDayTitles.value[0])
      provide("selectedTitle", selectedTitle)
      return {
         selectedTitle,
         tabDayTitles,
      }
   }
}
</script>
<style lang="scss">
@import "@/assets/style.scss";
.days-week {
   &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 780px;
      border-radius: 30px;
      background: $blok-txt-color;
      box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
      margin-bottom: 20px;
      padding: 16px 15.5px 11px 15.5px;
      li{
         padding: 0 34.5px;
         font-family: $font-comfortaa;
         font-weight: 700;
         font-size: 25px;
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