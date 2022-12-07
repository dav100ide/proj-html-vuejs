<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <h4 class="mb-4">OUR BUSINESS AREA</h4>
         <h2 class="mb-4">
            Excellence in
            <strong class="secondary | px-2 py-1 rounded-2"> Services </strong>
         </h2>
         <div class="d-md-flex justify-content-between align-items-center">
            <p>
               We are leaders in providing Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dolores pariatur repellendus molestias officia dolore suscipit nobis culpa tempore
               quod explicabo.
            </p>
            <div class="text-center">
               <SecondaryBtn innerHTML="SEE ALL" />
            </div>
         </div>
         <div>
            <div class="row gy-4">
               <div v-for="service in services" class="col-12 col-sm-6 col-md-4">
                  <TransparentCard :info="service" />
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import SecondaryBtn from '../btns/SecondaryBtn.vue';
import TransparentCard from '../cards/transparentCard.vue';

export default {
   components: {
      SecondaryBtn,
      TransparentCard,
   },
   data() {
      return {
         services: [
            {
               icon: 'fa-solid fa-people-group',
               title: 'Audit & Assurance',
               description: 'Lorem ispum dolor sit ciao hahah bla bla testoo. haha dizionario.',
            },
            {
               icon: 'fa-solid fa-suitcase',
               title: 'Financial Adivosry',
               description: 'Finance is very important bla testoo. haha dizionario.',
            },
            {
               icon: 'fa-solid fa-chart-simple',
               title: 'Analyyics and M&A',
               description: 'a guru once said: bla bla testoo. haha dizionario.',
            },
            {
               icon: 'fa-solid fa-plane-up',
               title: 'Middle Marketing',
               description: 'this is lit Middle market skuu hahah bla bla testoo. haha dizionario.',
            },
            {
               icon: 'fa-solid fa-globe',
               title: 'Legal Consulting',
               description: 'Here is coming da police testoo. haha dizionario.',
            },
            {
               icon: 'fa-solid fa-box',
               title: 'Regulatory Risk',
               description: 'Risk is impossible ciao hahah bla bla testoo. haha dizionario.',
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--secondary-color-400);
   color: var(--neutral-color-200);
   p {
      @media (width > 768px) {
         width: 60%;
      }
   }
}
</style>
