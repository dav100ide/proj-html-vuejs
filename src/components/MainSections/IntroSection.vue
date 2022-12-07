<template>
   <section class="ms_py ms_container__sm | text-center">
      <h4 class="mb-4">INTRODUCTION VIDEO</h4>
      <h2 class="mb-4">
         Advisory
         <strong class="primary | px-2 py-1 rounded-2">Performance</strong>
      </h2>
      <p class="mb-5">
         Financial executive need to review their strategies, operating models and capabilities so
         that their areas can generate sound information for better decision making.
      </p>
      <div class="video__container">
         <img src="../../assets/video-1.jpg" alt="" class="img-fluid" />
         <div class="video__play-btn blue"></div>
         <div class="video__play-btn white"></div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
   color: var(--neutral-color-450);
}
.video__container {
   position: relative;

   .video__play-btn {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 2.5rem 0 2.5rem 5rem;
      border-radius: 10%;
      &.white {
         @include position-absolute-center;
         border-color: transparent transparent transparent rgba(white, 0.7);
      }

      &.blue {
         position: absolute;
         top: 50%;
         left: 50%;
         translate: -48% -60%;
         border-color: transparent transparent transparent rgba(56, 189, 250, 0.9);
      }
   }
}
</style>
