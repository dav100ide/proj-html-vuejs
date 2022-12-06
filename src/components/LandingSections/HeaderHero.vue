<template>
   <div class="wrapper">
      <div class="ms_container | container-fluid">
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
               <PrimaryBtn innerHTML="GET IN TOUCH" />
            </nav>
         </header>
      </div>
      <section class="hero">
         <h1 class="mb-4">Financial Risk</h1>
         <p class="mb-4">
            The right outcomes depend on continuos rigor in governance, models, and <br />
            processes across the finance function.
         </p>
         <div class="buttons">
            <PrimaryBtn class="me-3" innerHTML="GET IN TOUCH" />
            <SecondaryBtn innerHTML="READ MORE" />
         </div>
      </section>
   </div>
</template>

<script>
import PrimaryBtn from '../btns/PrimaryBtn.vue';
import SecondaryBtn from '../btns/SecondaryBtn.vue';

export default {
   components: {
      PrimaryBtn,
      SecondaryBtn,
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
   color: var(--neutral-color-200);
   position: relative;
   &::before {
      z-index: -100;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/bg-2.jpg);
      filter: brightness(0.7);
   }
}

header {
   flex-grow: 0;
   @include flex-center;
   justify-content: space-between;

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

.hero {
   padding-block-start: 15rem;
   padding-block-end: 20rem;
   text-align: center;
   h1 {
      font-size: 5rem;
      font-weight: bold;
   }
   p {
      font-size: 1.1rem;
      color: var(--neutral-color-300);
   }
}
</style>
