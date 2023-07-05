<template>
  <Background>
    <div class="menu-container">Menu</div>
  </Background>
</template>

<script>
import Background from '@/components/base/Background.vue';

export default {
  components: {
    Background,
  },
  created() {
    document.title = 'USCGS | Menu';
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/core.scss";

.menu-container {
  display: flex;
  flex-direction: column;
}
</style>
