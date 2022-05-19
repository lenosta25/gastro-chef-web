<template>
  <div class="about-info container-m">
    <section class="about-info__section">
      <h2>
        Здравствуйте! Меня зовут <span> Кобылинский Кирилл</span>, и я являюсь
        <span> основателем GastroChef.</span>
      </h2>
      <p class="about-info__section-txt">
        Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе
        сборной Украины.
      </p>
      <p class="about-info__section-txt">
        У меня высшее образование национального университета физического
        воспитания и спорта Украины (НФВСУ), а так же в прошлом я
        профессиональный фитнес тренер!
      </p>
      <p class="about-info__section-txt">И я хочу Вам рассказать побольше о GastroChef.</p>
    </section>
    <img src="@/assets/img/header-swiper-third.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.container-m{
  width: 100%;
  max-width: 1590px;
  margin: 0 auto;
}
.about-info{
display: flex;
justify-content: space-around;
align-items: center;
z-index: 1;
&__section{
   max-width: 526px;
   h2{
     text-align: start;
     padding-bottom: 40px;
   }
   span{
     color: $them-color;
   }
   &-txt{
     font-family: $font-comfortaa;
     font-weight: 300;
     font-size: 20px;
     line-height: 30px;
     padding-bottom: 20px;
     text-align: justify;
   }
   &-txt:last-child{
     font-weight: 700;
     padding-top: 25px;
   }
}
img{
   max-width: 100%;
    border-radius: 50%;
    border: 31px solid $blok-txt-color;
}
}
</style>
