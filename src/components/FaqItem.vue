<template>
  <div :class="open ? 'faq open': 'faq'" @click="$emit('toggleOpen', index)">
    <div class="question">
      {{ faq.question}}
    </div>
    <div class="answer">
      {{ faq.answer}}
    </div>
  </div>
</template>

<script>
 export default {
   props: ['faq', 'index', 'open'],
   data: () => {
     return {}
   }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/style.scss";
  .faq {
    padding: 20px 30px;
    display: block;
    border-radius: 50px;
    box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2);
    background-color: $blok-txt-color;
    transition: all .4s linear;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all .3s linear;
    &.open > .question {
      margin-bottom: 20px;
    }
    &.open > .question::after {
      transform: translateY(-50%) rotate(200px);
    }
    &.open > .answer {
      opacity: 1;
      max-height: max-content;
    }
    .question,.answer{
      font-family: $font-montserrat;
      font-weight: 400;
      font-size: 16px;
      transition: all .3s linear;
    }
    .question {
      position: relative;
      color: $txt-color;
    }
    .answer {
      color: $them-color;
      text-align: justify;
      line-height: 20px;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
  }
  .faq:hover{
    box-shadow: 0px 0px 4px $circle-color;
  }
</style>