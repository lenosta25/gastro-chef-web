<template>
  <div class="advantage-block">
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-eco"></i>
      <p class="advantage-block__item-txt">
        Бережём природу. Эко-тара и проборы.
      </p>
    </div>
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-hand-with-tray"></i>
      <p class="advantage-block__item-txt">
        28 дней без повторения, более 300 блюд!
      </p>
    </div>
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-time-1"></i>
      <p class="advantage-block__item-txt">
        Бесплатно заменяем блюда и ингредиенты.
      </p>
    </div>
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-night"></i>
      <p class="advantage-block__item-txt">
        Готовим ночью, упаковываем и отправляем Вам!
      </p>
    </div>
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-delivery"></i>
      <p class="advantage-block__item-txt">
        Ежедневная удобная и бесплатная доставка с 6:00 до 10:00
      </p>
    </div>
    <div class="advantage-block__item">
      <i class="advantage-block__item-icon icon-time"></i>
      <p class="advantage-block__item-txt">
        Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!
      </p>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.advantage-block {
  max-width: 1287px;
  height: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 85px ;
  margin-bottom: 100px;
  position: relative;
  background: $blok-txt-color;
  opacity: 0.8;
  border-radius: 30px;
  &__item {
     width: 200px;
   text-align: center;
   padding: 0 14px;
    &-icon {
      font-size: 60px;
      color: $them-color;
    }
   &-txt{
      font-family: $font-montserrat;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      line-height: 15.63px;
      color: $txt-color;
   }
  }
}
</style>
