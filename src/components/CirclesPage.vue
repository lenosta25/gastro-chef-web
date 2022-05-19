<template>
  <div class="circle-first"></div>
  <div ref="sceneSecond" class="scene-second">
    <div class="circle" data-depth="0.9"></div>
  </div>
  <div ref="sceneThird" class="scene-third">
    <div class="border-circle" data-depth="0.8"></div>
  </div>
  <div ref="sceneFourth" class="scene-fourth">
    <div class="border-circle" data-depth="0.9"></div>
  </div>
  <div ref="sceneFifth" class="scene-fifth">
    <div class="border-circle" data-depth="0.8"></div>
  </div>
  <div ref="sceneSixth" class="scene-sixth">
    <div class="circle" data-depth="0.9"></div>
  </div>
  <div ref="sceneSeventh" class="scene-seventh">
    <div class="border-circle" data-depth="0.8"></div>
  </div>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "circles-page",
  mounted() {
    new Parallax(this.$refs.sceneSecond);
    new Parallax(this.$refs.sceneThird);
    new Parallax(this.$refs.sceneFourth);
    new Parallax(this.$refs.sceneFifth);
    new Parallax(this.$refs.sceneSixth);
    new Parallax(this.$refs.sceneSeventh);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.circle {
  background: $circle-color;
  opacity: 0.1;
  border-radius: 50%;
}
.border-circle {
  background: none;
  opacity: 0.1;
  border-radius: 50%;
}
.circle-first {
  position: absolute;
  width: 1293.88px;
  height: 1293.88px;
  border-radius: 50%;
  left: 973px;
  top: -110.47px;
  background: $them-color;
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.4);
}
.scene-second {
  position: absolute;
  left: -208.75px;
  top: 1106.55px;
  .circle {
    width: 544.5px;
    height: 544.5px;
  }
}
.scene-third {
  position: absolute;
  right: -55px;
  top: 1829.92px;
  .border-circle {
    width: 529.6px;
    height: 529.6px;
    border: 30px solid $circle-color;
  }
}
.scene-fourth {
  position: absolute;
  left: 12px;
  top: 2347.6px;
  .border-circle {
    width: 298.92px;
    height: 298.92px;
    border: 20px solid $circle-color;
  }
}
.scene-fifth {
  position: absolute;
  left: 433px;
  top: 2871.19px;
  .border-circle {
    width: 184.34px;
    height: 184.34px;
    border: 15px solid $circle-color;
  }
}
.scene-sixth {
  position: absolute;
  right: -92px;
  top: 2852.03px;
  .circle {
    width: 603.42px;
    height: 603.42px;
  }
}
.scene-seventh {
  position: absolute;
  left: -348px;
  top: 3342.62px;
  .border-circle {
    width: 519.49px;
    height: 519.49px;
    border: 30px solid $circle-color;
  }
}

@media (max-width:1760px) {
 .circle-first{
    left: 949px;
  }
}
@media (max-width:1600px) {
 .circle-first{
    left: 848px;
  }
}
</style>
