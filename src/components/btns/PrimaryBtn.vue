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

<style lang="scss" scoped>
.btn {
   font-weight: 500;
   --bs-btn-border-radius: 0.3125rem;

   &-primary {
      --bs-btn-bg: var(--primary-color-300);
      --bs-btn-border-color: var(--primary-color-300);

      --bs-btn-hover-bg: var(--primary-color);
      --bs-btn-hover-border-color: var(--primary-color);

      --bs-btn-active-bg: var(--accent-color);
      --bs-btn-active-border-color: var(--accent-color);

      --bs-btn-disabled-color: var(--neutral-color-300);
      --bs-btn-disabled-bg: var(--neutral-color-300);
      --bs-btn-disabled-border-color: var(--neutral-color-300);
   }
}
</style>
