<template>
   <section class="ms_py">
      <div class="ms_container">
         <h4 class="mb-4">OUR BUSINESS AREA</h4>
         <h2 class="mb-4">
            Excellence in
            <strong class="secondary | px-2 py-1 rounded-2"> Services </strong>
         </h2>
         <div class="d-flex justify-content-between align-items-center">
            <p>
               We are leaders in providing Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dolores pariatur repellendus molestias officia dolore suscipit nobis culpa tempore
               quod explicabo.
            </p>
            <SecondaryBtn innerHTML="SEE ALL" />
         </div>
      </div>
   </section>
</template>

<script>
import SecondaryBtn from '../btns/SecondaryBtn.vue';

export default {
   components: {
      SecondaryBtn,
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--secondary-color-400);
   color: var(--neutral-color-200);
   .d-flex p {
      width: 60%;
      color: var(--neutral-color-300);
   }
}
</style>
