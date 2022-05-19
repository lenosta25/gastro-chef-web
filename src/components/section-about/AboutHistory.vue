<template>
  <div class="about-history">
    <img src="@/assets/img/hand.png" alt="" />
    <section class="about-history__section">
      <h2>История GastroChef началась более 6-ти лет назад...</h2>
      <p class="about-history__section-txt">
        Долгое время я наблюдал как людям не хватает времени для правильного и
        здорового питания, какое правильного, просто питания регулярного.
      </p>
      <p class="about-history__section-txt">
        Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а
        вечером в силу голода наесться, что плохо сказывалось на их обмене
        веществ и естественно здоровье.
      </p>
      <p class="about-history__section-txt">
        Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя
        и я решил открыть доставку еды правильного питания.
      </p>
      <p class="about-history__section-txt">
        Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с
        диетологом разработали рационы правильного питания с подсчетом калорий
        (КБЖУ).
      </p>
      <h2>Знакомтесь! Команда GastroChef!</h2>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
.about-history {
  padding-top: 190px;
  z-index: 2;
  display: flex;
  align-items: center;
  img {
    z-index: 1;
    max-width: 859px;
  }
  &__section {
    max-width: 664px;
    h2 {
      text-align: start;
    }
    &-txt {
      font-family: $font-comfortaa;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      padding-bottom: 20px;
      text-align: justify;
    }
  }
}
</style>
