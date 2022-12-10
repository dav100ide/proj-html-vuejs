<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <h4 class="mb-4">WE LIKE WHAT WE DO</h4>
         <div class="row">
            <div class="col-12 col-md-8">
               <h2 class="mb-4">
                  <strong class="primary">TEAM</strong>
                  of Experts
               </h2>
               <p class="mb-5">
                  Ethics Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dignissimos
                  facere quae molestias quisquam optio suscipit voluptatem id vero.
               </p>
               <div class="row gy-5">
                  <div v-for="member in team" class="col-sm-6">
                     <ContactCard :info="member" />
                  </div>
               </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
               <CiteCard class="mt-3 mt-md-0" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import ContactCard from '../cards/ContactCard.vue';
import CiteCard from '../cards/CiteCard.vue';

export default {
   components: {
      ContactCard,
      CiteCard,
   },
   data() {
      return {
         team: [
            {
               img: 'src/assets/team-1.jpg',
               fullName: 'Davide Oreglio',
               role: 'Founder & Milionaire',
               links: {
                  facebook: 'facebook.com',
                  twitter: 'twitter.com',
                  linkedin: 'likendin.com',
               },
            },
            {
               img: 'src/assets/team-2.jpg',
               fullName: 'Oliver Jones',
               role: 'Chef Producer',
               links: {
                  facebook: 'facebook.com',
                  twitter: 'twitter.com',
                  linkedin: 'likendin.com',
               },
            },
            {
               img: 'src/assets/team-3.jpg',
               fullName: 'Emma Lopez',
               role: 'Cook & Janitor',
               links: {
                  facebook: 'facebook.com',
                  twitter: 'twitter.com',
                  linkedin: 'likendin.com',
               },
            },
            {
               img: 'src/assets/team-4.jpg',
               fullName: 'T. Johnson',
               role: 'CEO & President',
               links: {
                  facebook: 'facebook.com',
                  twitter: 'twitter.com',
                  linkedin: 'likendin.com',
               },
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped></style>
