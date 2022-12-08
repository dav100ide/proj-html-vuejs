<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <h4 class="mb-4">OUR EDITORIAL CONTENT</h4>
         <h2 class="mb-4">
            Latest
            <strong class="primary | px-2 py-1 rounded-2"> News </strong>
         </h2>
         <div class="mb-4 d-md-flex justify-content-between align-items-center">
            <p>Every week we publish content about what is best in the BUSINESS world.</p>
            <div class="text-center">
               <PrimaryBtn innerHTML="SEE ALL" />
            </div>
         </div>
         <div class="row">
            <div v-for="article in articles" class="col-6 col-md-4">
               <NewSCard :info="article" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import PrimaryBtn from '../btns/PrimaryBtn.vue';
import NewSCard from '../cards/NewsCard.vue';

export default {
   components: {
      PrimaryBtn,
      NewSCard,
   },
   data() {
      return {
         articles: [
            {
               name: 'Andrea Miller',
               date: '3 Days Ago',
               title: 'Incresing creativity blah blah',
               description: 'lorem ispshaadoi daiowh wuwdhb ofwhccn',
               img: 'src/assets/news-1.jpg',
            },
            {
               name: 'Nigga Kebab',
               date: '4 Days Ago',
               title: 'Ho gli occhiali da sole swag',
               description: 'How get such cool sunglasses wuwdhb ofwhccn',
               img: 'src/assets/news-2.jpg',
            },
            {
               name: 'Sofia Leftist',
               date: '2 Days Ago',
               title: 'Faccio finta di lavorare tutti i giorni blah',
               description: 'Work from home disaster wuwdhb ofwhccn',
               img: 'src/assets/news-3.jpg',
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: #eef4ed;
}
</style>
