<template >
   <div class="container " v-show="title == selectedTitle ">
      <slot></slot>
   </div>
</template>
<script>
import { inject } from 'vue'
export default {
   props: ['title'],
   setup(){
      const selectedTitle = inject('selectedTitle')
      return{
         selectedTitle,
       
      }
   }
}
</script>
<style lang="scss">
@import "@/assets/style.scss";
   
</style>