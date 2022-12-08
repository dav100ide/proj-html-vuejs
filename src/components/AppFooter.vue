<template>
   <footer>
      <TopFooter />
   </footer>
</template>

<script>
import TopFooter from './FooterSections/TopFooter.vue';
export default {
   components: {
      TopFooter,
   },
};
</script>

<style lang="scss" scoped>
footer {
   color: var(--neutral-color-300);
}
</style>
