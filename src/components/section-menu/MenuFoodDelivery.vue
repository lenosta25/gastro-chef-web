<template>
  <btn-wrapper>
    <btn-item title="Программы питания">
      <tab-wrapper>
        <tab-item title="fitness">
          <div class="main-content">
            <div class="main-content__info">
              <section class="main-content__info-description">
                <h3>fitness <span>1300 ккал</span></h3>
                <p>
                  Программа здорового питания Express Fit. Идеально для:
                  похудения в кратчайшие сроки, повышения энергии и сил,
                  снижения веса при сидячем образе жизни.
                </p>
              </section>
              <table class="main-content__info-prices">
                <tr>
                  <td>Тестовый день</td>
                  <td class="old-price">510 грн</td>
                  <td>357 грн</td>
                </tr>
                <tr>
                  <td>1 день</td>
                  <td></td>
                  <td>510 грн</td>
                </tr>
                <tr>
                  <td>от 7 дней</td>
                  <td class="old-price">510 грн</td>
                  <td>490 грн</td>
                </tr>
                <tr>
                  <td>от 14 дней</td>
                  <td class="old-price">510 грн</td>
                  <td>470 грн</td>
                </tr>
                <tr>
                  <td>от 30 дней</td>
                  <td class="old-price">510 грн</td>
                  <td>445 грн</td>
                </tr>
              </table>
              <button class="main-content__info-btn">Заказать</button>
            </div>
            <div class="main-content__calendar">
              <tab-days-wrapper>
                <tab-day title="ПН">
                  <table class="main-content__calendar-content">
                    <tr>
                      <td>
                        <b>Завтрак</b>
                        <p>7:00 - 9:00</p>
                      </td>
                      <td>- Фриттата с сыром и кабачками</td>
                      <td>170гр</td>
                    </tr>
                    <tr>
                      <td>
                        <b>2-й завтрак</b>
                        <p>10:00 - 12:00</p>
                      </td>
                      <td>
                        - Фермерский йогурт
                        <p>- Полезное печенье из сухофруктов и орехов</p>
                      </td>
                      <td>
                        200гр
                        <p>2 шт</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Обед</b>
                        <p>13:00 - 15:00</p>
                      </td>
                      <td>
                        - Люля-кебаб из индейки
                        <p>- Летний салат с маслинами и сыром</p>
                      </td>
                      <td>
                        100гр
                        <p>100гр</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Полдник</b>
                        <p>16:00 - 17:30</p>
                      </td>
                      <td>- Творожное суфле с какао и вишей</td>
                      <td>100гр</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ужин</b>
                        <p>19:00 - 20:00</p>
                      </td>
                      <td>
                        - Рыбный терен
                        <p>- Овощи гриль</p>
                      </td>
                      <td>
                        100гр
                        <p>150гр</p>
                      </td>
                    </tr>
                  </table>
                </tab-day>
                <tab-day title="ВТ">Вт</tab-day>
                <tab-day title="СР">Ср</tab-day>
                <tab-day title="ЧТ">Чт</tab-day>
                <tab-day title="ПТ">Пт</tab-day>
                <tab-day title="СБ">Сб</tab-day>
                <tab-day title="ВС">Вс</tab-day>
              </tab-days-wrapper>
            </div>
          </div>
        </tab-item>

        <tab-item title="slim">slim</tab-item>
        <tab-item title="express fit">express fit</tab-item>
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
import TabDaysWrapper from "./TabDaysWrapper.vue";
import TabDay from "./TabDay.vue";

export default {
  components: {
    BtnWrapper,
    BtnItem,
    TabWrapper,
    TabItem,
    TabDaysWrapper,
    TabDay,
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
.main-content {
  display: flex;
  justify-content: space-between;
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-description {
      max-width: 380px;
      border-radius: 30px;
      box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
      background: $them-color;
      padding: 30px 50px 39px 50px;
      margin-bottom: 50px;
      h3 {
        padding-bottom: 19px;
        font-family: $font-comfortaa;
        font-weight: 700;
        font-size: 25px;
        color: $blok-txt-color;
        text-transform: uppercase;
        span {
          padding-left: 20px;
          font-family: $font-montserrat;
          font-weight: 500;
          font-size: 18px;
          text-transform: none;
        }
      }
      p {
        font-family: $font-montserrat;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: $blok-txt-color;
      }
    }
    &-prices {
      padding: 0 20px;
      font-family: $font-montserrat;
      max-width: 380px;
      font-weight: 400;
      font-size: 15px;
      color: $txt-color;
      td {
        padding: 10px 8px;
      }
      .old-price {
        text-decoration: line-through;
        padding-left: 44px;
      }
    }
    &-btn {
      margin-top: 50px;
      text-align: center;
      @include green-btn-inactive;
    }
    &-btn:hover {
      @include green-btn-hover;
    }
  }
  &__calendar {
    &-content {
      z-index: 2;
      position: relative;
      max-width: 780px;
      background: $blok-txt-color;
      box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3);
      border-radius: 30px;
      padding: 30px 50px 40px 50px;
      font-family: $font-montserrat;
font-weight: 300;
font-size: 17px;
line-height: 22px;
      tr{
        padding-bottom: 50px;
      }
      td{
        padding: 20px;
      }
    }
  }
}
</style>
