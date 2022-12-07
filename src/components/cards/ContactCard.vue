<template>
   <article class="container-fluid">
      <div class="row">
         <div class="col-5">
            <img :src="info.img" :alt="info.name" class="img-fluid rounded-1" />
         </div>
         <div class="col d-flex flex-column">
            <h5>{{ info.fullName }}</h5>
            <p>{{ info.role }}</p>
            <div class="socials">
               <a :href="info.links.facebook">
                  <i class="fa-brands fa-facebook"></i>
               </a>
               <a :href="info.links.twitter">
                  <i class="fa-brands fa-twitter"></i>
               </a>
               <a :href="info.links.linkedin">
                  <i class="fa-brands fa-linkedin"></i>
               </a>
            </div>
         </div>
      </div>
   </article>
</template>

<script>
export default {
   props: {
      info: {
         type: Object,
         default: {
            img: 'https://via.placeholder.com/200x250',
            fullName: 'Nome Cognome',
            role: 'Ruolo',
            links: {
               facebook: 'facebook.com',
               twitter: 'twitter.com',
               linkedin: 'likendin.com',
            },
         },
      },
   },
};
</script>

<style lang="scss" scoped>
h5 {
   font-weight: bold;
   font-size: 1.4rem;
}

.socials {
   // background-color: lightcoral;
   flex-grow: 1;
   display: flex;
   justify-content: flex-start;
   align-items: flex-end;
   gap: 0.5rem;
   a {
      i {
         font-size: 1.2rem;
         @include parent-circle(2.5rem);
         color: var(--primary-color);
         background-color: var(--primary-color-200);
      }
   }
}
</style>
