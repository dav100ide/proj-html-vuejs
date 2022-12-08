<template>
   <div class="glass-card rounded-3 h-100">
      <h3>{{ info.title }}</h3>
      <ul>
         <li v-for="item in info.list">
            <i class="fa-solid fa-chevron-right"></i>
            {{ item }}
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   props: {
      info: {
         type: Object,
         default: {
            title: 'titolo',
            list: [
               'list-item-1', //
               'list-item-2',
               'list-item-3',
            ],
         },
      },
   },
};
</script>

<style lang="scss" scoped>
.glass-card {
   background-color: rgba(white, 0.07);
   padding: 3.125rem 2rem;
   h3 {
      font-weight: bold;
      color: var(--neutral-color-100);
      font-size: 1.5rem;
      text-transform: capitalize;
   }
   ul {
      @include reset-list;
      li {
         @include flex-start(0.5rem);

         &:not(:last-child) {
            margin-bottom: 0.5rem;
         }
      }
   }
}
</style>
