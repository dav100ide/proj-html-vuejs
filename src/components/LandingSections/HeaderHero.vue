<template>
   <div class="header-hero">
      <div class="ms_container | container-fluid">
         <header class="py-3">
            <img src="../../assets/nexgen-logo.svg" alt="logo" />
            <!-- desktop nav -->
            <nav class="d-none d-md-flex">
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
            <!-- /desktop nav -->
            <!-- mobile hamburger -->
            <div class="d-block d-md-none">
               <button class="btn btn-primary" id="hamburger" @click="menuOpen = !menuOpen">
                  <i class="fa-solid" :class="{ 'fa-bars': !menuOpen, 'fa-x': menuOpen }"></i>
               </button>
            </div>
            <!-- /mobile hamburger -->
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
      <!-- offcanvas: hamburger menu -->
      <nav id="hamburger-menu" class="fs-4" :class="{ active: menuOpen }">
         <ul>
            <li v-for="link in links">
               <a :href="link.href">
                  {{ link.linkName }}
               </a>
            </li>
         </ul>
      </nav>
      <!-- /offcanvas: hamburger menu -->
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
         menuOpen: false,
      };
   },
};
</script>

<style lang="scss" scoped>
.header-hero {
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
   text-align: center;
   padding-block: 5rem;
   @media (width > 768px) {
      padding-block: 10rem;
   }
   @media (width > 992px) {
      padding-block-start: 15rem;
      padding-block-end: 20rem;
   }
   h1 {
      font-weight: 900;
      font-size: 3rem;
      @media (width > 992px) {
         font-size: 5rem;
      }
   }
   p {
      font-size: 1.1rem;
   }
}
// mobile hamburger nav menu
#hamburger {
   width: 3.5rem;
   background-color: var(--primary-color);
   border: none;
   transition: left 1s cubic-bezier(0.15, -0.3, 0.66, 0.08);
}

#hamburger-menu {
   z-index: 50;
   box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 15px;
   width: 60%;
   background-color: var(--secondary-color-400);
   position: fixed;
   top: 0;
   left: -70%;
   transition: left 0.35s linear;
   &.active {
      @media (width < 768px) {
         left: 0;
      }
   }
   ul {
      @include reset-list;
      li {
         text-align: center;
         padding: 0.5rem;
         &:hover {
            background-color: var(--primary-color-300);
         }
      }
   }
}
</style>
