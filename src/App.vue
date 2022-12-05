<script>
import AppLanding from './components/AppLanding.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
   components: {
      AppLanding,
      AppMain,
      AppFooter,
   },
};
</script>

<template>
   <AppLanding />
   <AppMain />
   <AppFooter />
</template>

<style lang="scss">
@import './style/global.scss';
</style>
