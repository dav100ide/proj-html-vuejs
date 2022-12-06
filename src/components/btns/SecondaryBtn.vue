<template>
   <button class="btn btn-secondary">
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
