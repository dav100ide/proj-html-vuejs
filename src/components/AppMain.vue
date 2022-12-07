<template>
   <main>
      <IntroSection />
      <ResultsSection />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
   },
};
</script>

<style lang="scss" scoped></style>
