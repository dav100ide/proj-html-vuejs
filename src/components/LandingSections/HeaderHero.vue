<template>
   <div class="wrapper">
      <div class="ms_container container-fluid">
         <header class="py-3">
            <img src="../../assets/nexgen-logo.svg" alt="logo" />
            <nav>
               <ul>
                  <li v-for="link in links">
                     <a :href="link.href">
                        {{ link.linkName }}
                     </a>
                  </li>
               </ul>
               <a href="">
                  <i class="fa-regular fa-user"></i>
               </a>
               <!-- <button class="btn btn-primary">GET IN TOUCH</button> -->
               <PrimaryBtn innerHTML="GET IN TOUCH" />
            </nav>
         </header>
      </div>
   </div>
</template>

<script>
import PrimaryBtn from '../btns/PrimaryBtn.vue';
export default {
   components: {
      PrimaryBtn,
   },
   data() {
      return {
         links: [
            {
               linkName: 'HOME',
               href: '#',
            },
            {
               linkName: 'ABOUT',
               href: '#',
            },
            {
               linkName: 'SERVICES',
               href: '#',
            },
            {
               linkName: 'TEAM',
               href: '#',
            },
            {
               linkName: 'BLOG',
               href: '#',
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
.wrapper {
   background-image: url(../../assets/bg-2.jpg);
}

header {
   @include flex-center;
   justify-content: space-between;
   color: var(--neutral-color-200);
   img {
      max-width: 8rem;
   }
   nav {
      @include flex-center(2rem);
      ul {
         @include horizontal-list(2rem);
         font-weight: 500;
      }
   }
}
</style>
