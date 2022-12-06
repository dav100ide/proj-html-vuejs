<template>
   <div class="wrapper">
      <div class="ms_container | container-fluid py-2">
         <span class="working-time">
            <i class="fa-solid fa-clock"></i>
            <span>Open Hours Mon - Sat - 9:00 - 18:00</span>
         </span>
         <span class="company-info">
            <span
               ><a href="#">
                  <i class="fa-solid fa-phone | me-2"></i>
                  {{ this.store.companyInfo.phoneNumber }}
               </a>
            </span>
            <span
               ><a href="#">
                  <i class="fa-solid fa-envelope | me-2"></i>
                  {{ this.store.companyInfo.mail }}
               </a>
            </span>
            <a href="#">
               <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
               <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
               <i class="fa-brands fa-linkedin"></i>
            </a>
         </span>
      </div>
   </div>
</template>

<script>
import { store } from '../../store';
export default {
   data() {
      return {
         store,
      };
   },
};
</script>

<style lang="scss" scoped>
.wrapper {
   background-color: var(--secondary-color);
   color: var(--neutral-color-300);
}

.ms_container {
   display: flex;
   justify-content: space-between;
   .working-time {
      @include flex-center(0.5rem);
   }
   .company-info {
      @include flex-center(2rem);
   }
}
</style>
