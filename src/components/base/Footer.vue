<template>
  <div class="footer">
    <div class="copyright non-selectable">
      ⓒ USCGS {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExternalFooter',
};
</script>

<style lang="scss" scoped>
@import "@/scss/core.scss";
@import "@/scss/color.scss";

.footer {
  display: flex;
  flex-grow: 1;
  align-items: end;

  .copyright {
    color: $color-lightbrown-3;
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    white-space: nowrap;
  }

  margin-bottom: 15px;
}
</style>
