<template>
   <div class="glass-card rounded-3">
      <h5>{{ info.title }}</h5>
      <ul></ul>
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
.glass.card {
   background-color: white;
   padding: 3.125rem;
}
</style>
