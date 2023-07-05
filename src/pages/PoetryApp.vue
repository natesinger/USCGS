<template>
  <Background>
    <div class="poetry-container">poetry</div>
  </Background>
</template>

<script>
import Background from '@/components/base/Background.vue';

export default {
  components: {
    Background,
  },
  created() {
    document.title = 'USCGS | Poetry';
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
