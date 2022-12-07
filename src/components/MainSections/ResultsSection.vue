<template>
   <section>
      <div class="overlay"></div>
      <div class="ms_py ms_container text-center">
         <h4 class="mb-4">WHAT ARE WE DOING</h4>
         <h2>
            <strong class="secondary | px-2 py-1 rounded-2"> Results </strong>
            in Numbers
         </h2>
         <div class="row">
            <div v-for="result in results" class="col-6 col-md-3">
               <div class="h2">
                  {{ result.number }}
               </div>
               <div class="h5">
                  {{ result.name }}
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         results: [
            {
               name: 'Certifications',
               number: 128,
            },
            {
               name: 'Employees',
               number: 230,
            },
            {
               name: 'Customers',
               number: 517,
            },
            {
               name: 'Countries Served',
               number: 94,
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
section {
   position: relative;
   .overlay {
      z-index: -1;
      @include position-absolute-parent-size;
      background-image: url(../../assets/city2.jpg);
      background-size: cover;
      background-position: bottom;
      filter: grayscale(1);
   }
   h2 {
      color: var(--neutral-color-100);
      margin-bottom: 1.5rem;
      @media (width > 768px) {
         margin-bottom: 8rem;
      }
   }
   .h2 {
      color: var(--primary-color-300);
      font-weight: 400;
   }
   .h5 {
      color: var(--neutral-color-100);
      font-weight: bold;
   }
}
</style>
