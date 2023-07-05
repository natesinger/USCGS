<template>
  <div class="background">
    <Header></Header>
    <slot class="page-content"></slot>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/base/Header.vue';
import Footer from '@/components/base/Footer.vue';

export default {
  name: 'PreauthBackground',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/scss/core.scss";
@import "@/scss/color.scss";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: $color-darkgreen-1;
}

.background {
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .center-content {
    width: min(1000px, 98%);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  .page-content {
    display: flex;
    flex-grow: 1;
  }
}
</style>
