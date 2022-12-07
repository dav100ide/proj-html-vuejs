<template>
   <main>
      <IntroSection />
      <ResultsSection />
      <ServicesSection />
      <TeamSection />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';
import ServicesSection from './MainSections/ServicesSection.vue';
import TeamSection from './MainSections/TeamSection.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
      ServicesSection,
      TeamSection,
   },
};
</script>

<style lang="scss" scoped></style>
