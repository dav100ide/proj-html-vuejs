<template>
   <main>
      <IntroSection />
      <ResultsSection />
      <ServicesSection />
      <TeamSection />
      <NewsSection />
      <NewsLetter />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';
import ServicesSection from './MainSections/ServicesSection.vue';
import TeamSection from './MainSections/TeamSection.vue';
import NewsSection from './MainSections/NewsSection.vue';
import NewsLetter from './MainSections/NewsLetter.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
      ServicesSection,
      TeamSection,
      NewsSection,
      NewsLetter,
   },
};
</script>

<style lang="scss" scoped></style>
