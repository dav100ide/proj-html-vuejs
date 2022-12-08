<template>
   <div class="bottom-footer">
      <div class="ms_container container-fluid py-3">
         <div>Enjoyy the asi jjdjjap</div>
         <div>
            @2020 NEXGEN HOVER THIZ BAD BOY
            <a href="https://www.instagram.com/davidoreglio/">DAVIDE OREGLIO</a>
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottom-footer {
   background-color: black;
   .ms_container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      @media (width > 992px) {
         flex-direction: row;
         align-items: flex-start;
      }
      a {
         color: var(--primary-color);
         &:hover {
            color: var(--primary-color-200);
            font-weight: 900;
            text-shadow: 2px 2px var(--primary-color);
         }
      }
   }
}
</style>
