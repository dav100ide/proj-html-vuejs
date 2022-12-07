<template>
   <article class="rounded-3">
      <div class="overlay"></div>
      <img :src="info.img" :alt="info.name" class="img-fluid rounded-3" />
      <div class="card-text">
         <div class="pe-1">
            <i class="fa-solid fa-user"></i>
            {{ info.name }}
         </div>
         <div class="ps-1">
            <i class="fa-solid fa-clock"></i>
            {{ info.date }}
         </div>
         <h4>{{ info.title }}</h4>
         <p>{{ info.description }}</p>
      </div>
   </article>
</template>

<script>
export default {
   props: {
      info: {
         type: Object,
         default: {
            name: 'nome',
            date: '2 Days Ago',
            title: 'titolo lungo ciaooo',
            description: 'descrizione lungaaa',
            img: 'https://via.placeholder.com/150',
         },
      },
   },
};
</script>

<style lang="scss" scoped>
article {
   position: relative;
   .overlay {
      background-color: rgba(black, 0.45);
      @include position-absolute-parent-size;
   }

   .card-text {
      & > * {
         position: absolute;
         margin: 0;
         padding: 0;
         color: var(--neutral-color-200);
         text-align: center;
      }

      h4 {
         transition: bottom 0.3s linear;
         color: var(--neutral-color-100);
         bottom: 15%;
         left: 50%;
         translate: -50%;
      }
      p {
         padding-inline: 0.5rem;
         transition: opacity 0.5s linear;
         bottom: 15%;
         left: 0;
         opacity: 0;
      }
      div:has(i) {
         transition: all 0.5s linear;
         top: 100%;
         @include flex-center(0.5rem);
      }
      div:has(i):first-child {
         right: 100%;
      }
      div:has(i):nth-child(2) {
         left: 100%;
      }
   }
   &:hover {
      h4 {
         bottom: 40%;
      }
      p {
         opacity: 1;
      }
      div:has(i) {
         top: 8%;
      }
      div:has(i):first-child {
         right: 50%;
      }
      div:has(i):nth-child(2) {
         left: 50%;
      }
   }
}
</style>
