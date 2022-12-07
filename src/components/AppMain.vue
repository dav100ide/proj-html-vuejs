<template>
   <main>
      <IntroSection />
      <ResultsSection />
      <ServicesSection />
      <TeamSection />
      <NewsSection />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';
import ServicesSection from './MainSections/ServicesSection.vue';
import TeamSection from './MainSections/TeamSection.vue';
import NewsSection from './MainSections/NewsSection.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
      ServicesSection,
      TeamSection,
      NewsSection,
   },
};
</script>

<style lang="scss" scoped></style>
