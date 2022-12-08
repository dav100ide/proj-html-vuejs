<template>
   <section class="ms_py">
      <div class="ms_container__sm container-fluid">
         <div class="row">
            <div class="col-12 col-lg-6">
               <h4 class="mb-4">NEWSLETTER</h4>
               <h2 class="mb-4">
                  <strong class="secondary | px-2 py-1 rounded-2">Know</strong>
                  First
               </h2>
               <p>
                  Follow your dreams Lorem ipsum dolor sit amet csaiduj isjadioa j jdjjd ooowo
                  whjdpoh
               </p>
            </div>
            <div class="col-12 col-md-6">
               <form class="subscribe-form" @submit.prevent>
                  <div class="form-floating mb-3">
                     <input type="text" class="form-control" id="sub-text" placeholder="Name" />
                     <label for="sub-text">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                     <input type="email" class="form-control" id="sub-email" placeholder="Email" />
                     <label for="sub-email">Email</label>
                  </div>
                  <PrimaryBtn type="submit" innerHTML="SUBSCRIBE" />
               </form>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import PrimaryBtn from '../btns/PrimaryBtn.vue';
export default {
   components: {
      PrimaryBtn,
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--secondary-color-400);
   h2 {
      color: var(--neutral-color-100);
   }
   .subscribe-form {
      .form-floating {
         input.form-control {
            padding-inline: 1.5rem;
            color: var(--neutral-color-100);
            background: rgba(white, 0.15);
            border: none;
            &:focus {
               box-shadow: none;
            }
         }
         label {
            color: var(--neutral-color-300);
         }
      }
      button {
         padding: 0.5rem 2rem;
      }
   }
}
</style>
