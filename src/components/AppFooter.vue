<template>
   <footer>
      <TopFooter />
      <BottomFooter />
   </footer>
</template>

<script>
import TopFooter from './FooterSections/TopFooter.vue';
import BottomFooter from './FooterSections/BottomFooter.vue';

export default {
   components: {
      TopFooter,
      BottomFooter,
   },
};
</script>

<style lang="scss" scoped>
footer {
   color: var(--neutral-color-300);
}
</style>
