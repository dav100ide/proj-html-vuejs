<template>
   <article>
      <div class="mb-3 d-flex justify-content-between align-items-start">
         <i :class="info.icon"></i>
         <div class="ms_circle">
            <i class="fa-solid fa-arrow-right"></i>
         </div>
      </div>
      <h3 class="mb-3">{{ info.title }}</h3>
      <p>{{ info.description }}</p>
   </article>
</template>

<script>
export default {
   props: {
      info: {
         type: Object,
         default: {
            icon: 'fa-solid fa-star',
            title: 'titolo default',
            description: 'testo lungooo lungoo',
         },
      },
   },
};
</script>

<style lang="scss" scoped>
article {
   background-color: rgba(97, 96, 96, 0.1);
   padding: 1.5rem 1.8rem;
   border-radius: 1rem;
   .d-flex {
      color: var(--primary-color);
      i {
         font-size: 2rem;
         transition: color 0.3s ease-in;
      }
      .ms_circle {
         @include parent-circle(2rem);
         transition: background-color 0.3s ease-in;

         i {
            font-size: 1.5rem;
         }
      }
   }
   h3 {
      font-weight: bold;
   }

   p {
      font-size: 0.9rem;
      color: var(--neutral-color-300);
   }

   &:hover {
      .d-flex > i {
         color: var(--neutral-color-100);
      }
      .ms_circle {
         background-color: var(--neutral-color-100);
      }
   }
}
</style>
