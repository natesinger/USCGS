<template>
  <Background>
    <div class="about-container">about</div>
  </Background>
</template>

<script>
import Background from '@/components/base/Background.vue';

export default {
  components: {
    Background,
  },
  created() {
    document.title = 'USCGS | About';
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/core.scss";

.about-container {
  display: flex;
  flex-direction: column;
}
</style>
