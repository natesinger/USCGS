<template>
  <Background>
    <div class="not-found"><div class="text"><div class="number">404</div>Not Found</div></div>
  </Background>
</template>

<script>
import Background from '@/components/base/Background.vue';

export default {
  components: {
    Background,
  },
  created() {
    document.title = 'USCGS | 404';
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/core.scss";
@import "@/scss/color.scss";

.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    color: $color-red-3;
    font-size: 40px;
    font-weight: 700;
    text-align: center;

    .number {
      font-size: 120px;
      line-height: 100px;
    }
  }
}
</style>
