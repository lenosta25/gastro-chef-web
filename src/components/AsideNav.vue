<template>
   <nav class="main__nav">
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-calories"></i>
              </div>
              <span class="hidden-txt">Programs</span>
            </div>
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-fish"></i>
              </div>
              <span class="hidden-txt">Fish</span>
            </div>
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-carrot"></i>
              </div>
              <span class="hidden-txt">Veggie</span>
            </div>
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-bottle"></i>
              </div>
              <span class="hidden-txt">Detox</span>
            </div>
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-meat"></i>
              </div>
              <span class="hidden-txt">Keto</span>
            </div>
            <div class="nav-bg">
              <div class="nav-bg__icon">
                <i class="icon-table"></i>
              </div>
              <span class="hidden-txt">Menu</span>
            </div>
          </nav>
</template>

<script>
export default {
   
}
</script>

<style  lang="scss" scoped>
@import "@/assets/style.scss";
   .main__nav {
    width: 200px;
    padding-right: 170px;
    .nav-bg {
      overflow: hidden;
      display: inline-block;
      margin-bottom: 46px;
      width: 70px;
      height: 70px;
      border-radius: 50px;
      background: $blok-txt-color;
      box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25);
      transition: all 0.5s ease-out;
      cursor: pointer;
      &__icon {
        display: inline-block;
        height: 70px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        box-sizing: border-box;
        line-height: 70px;
        i {
          line-height: 60px;
        }
        .icon-fish,
        .icon-meat {
          font-size: 30px;
        }
        .icon-carrot,
        .icon-bottle {
          font-size: 40px;
        }
      }
      .hidden-txt {
        font-size: 20px;
        font-weight: 700;
        font-family: $font-comfortaa;
      }
    }
    .nav-bg:hover {
      width: 188px;
      color: $them-color;
      box-shadow: 0px 0px 4px $circle-color;
    }
  }
</style>