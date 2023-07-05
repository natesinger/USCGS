<template>
  <Background>
    <div class="home-container">home</div>
  </Background>
</template>

<script>
import Background from '@/components/base/Background.vue';

export default {
  components: {
    Background,
  },
  created() {
    document.title = 'USCGS | Home';
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/core.scss";

.home-container {
  display: flex;
  flex-direction: column;
}
</style>
