<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <div class="row">
            <div class="col-12 col-md-3 main-col">
               <img src="../../assets/nexgen-logo.svg" alt="logo" class="img-fluid mb-3" />
               <div class="mb-4">
                  A Functional bro nn ho voglia di scrivere haha ciao pizza pasta, mandolino.
               </div>

               <div class="mb-3">
                  <i class="fa-solid fa-phone"></i>
                  {{ store.companyInfo.phoneNumber }}
               </div>
               <div class="mb-3">
                  <i class="fa-solid fa-envelope"></i>
                  {{ store.companyInfo.mail }}
               </div>
               <div class="mb-4">
                  <i class="fa-solid fa-location-crosshairs"></i>
                  {{ store.companyInfo.location }}
               </div>
               <SecondaryBtn innerHTML="GET IN TOUCH" />
            </div>
            <div v-for="cardInfo in cardsInfo" class="col-12 col-sm-4 col-md-3">
               <GlassCard :info="cardInfo" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { store } from '../../store';
import SecondaryBtn from '../btns/SecondaryBtn.vue';
import GlassCard from '../cards/GlassCard.vue';

export default {
   data() {
      return {
         store,
         cardsInfo: [
            {
               title: 'About',
               list: ['Pokemon', 'ciao', 'tua mamma', 'come sta?', 'ho 3 anni', 'sku sku'],
            },
            {
               title: 'Services',
               list: [
                  'Audit & Assurance',
                  'Financial Adivosry',
                  'tua Analyyics and M',
                  'come sta?',
                  'Middle Marketing',
                  'skussaw1u',
               ],
            },
            {
               title: 'Support',
               list: [
                  'Csgo', //
                  'Final Fantasy',
                  'M and M',
                  'ciaooo',
                  'W la ..',
                  "sono d'accordo",
               ],
            },
         ],
      };
   },
   components: {
      SecondaryBtn,
      GlassCard,
   },
};
</script>

<style lang="scss" scoped>
section {
   background-image: url(../../assets/bg-7.jpg);

   .main-col {
      img {
         max-width: 11.25rem;
      }
      div:has(i) {
         @include flex-start(0.8rem);
      }
      button {
         padding: 0.5rem 2rem;
      }
   }
}
</style>
