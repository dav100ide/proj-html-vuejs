<template>
   <main>
      <IntroSection />
      <ResultsSection />
      <ServicesSection />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';
import ServicesSection from './MainSections/ServicesSection.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
      ServicesSection,
   },
};
</script>

<style lang="scss" scoped></style>
