<template>
   <main>
      <IntroSection />
      <ResultsSection />
      <ServicesSection />
      <TeamSection />
      <NewsSection />
      <NewsLetter />
      <MessageSection />
   </main>
</template>

<script>
import IntroSection from './MainSections/IntroSection.vue';
import ResultsSection from './MainSections/ResultsSection.vue';
import ServicesSection from './MainSections/ServicesSection.vue';
import TeamSection from './MainSections/TeamSection.vue';
import NewsSection from './MainSections/NewsSection.vue';
import NewsLetter from './MainSections/NewsLetter.vue';
import MessageSection from './MainSections/MessageSection.vue';

export default {
   components: {
      IntroSection,
      ResultsSection,
      ServicesSection,
      TeamSection,
      NewsSection,
      NewsLetter,
      MessageSection,
   },
};
</script>

<style lang="scss" scoped></style>
