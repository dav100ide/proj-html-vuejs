<template>
   <button class="btn btn-primary">
      {{ innerHTML }}
   </button>
</template>

<script>
export default {
   props: {
      innerHTML: {
         type: String,
         default: 'testo di default',
      },
   },
};
</script>

<style lang="scss" scoped></style>
