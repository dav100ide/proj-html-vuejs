<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <div class="row">
            <div class="col-12 col-md-6 col-lg-8">
               <h4 class="mb-4">SEND A MESSAGE</h4>
               <h2 class="mb-4">
                  Get in <strong class="primary | px-2 py-1 rounded-2"> Touch </strong>
               </h2>
               <p>We will respond to ur message on if we want to, cuz we r the best.</p>
               <!-- form message -->
               <form @submit.prevent>
                  <div class="row g-3 mb-3">
                     <div class="col-sm-6">
                        <div class="form-floating">
                           <input
                              type="text"
                              class="form-control"
                              id="message-name"
                              placeholder="Name"
                           />
                           <label for="message-name">Name</label>
                        </div>
                     </div>
                     <div class="col-sm-6">
                        <div class="form-floating">
                           <input
                              type="text"
                              class="form-control"
                              id="message-mail"
                              placeholder="Email"
                           />
                           <label for="message-mail">Email</label>
                        </div>
                     </div>
                     <div class="col-sm-6">
                        <div class="form-floating">
                           <input
                              type="text"
                              class="form-control"
                              id="message-phone"
                              placeholder="Phone"
                           />
                           <label for="message-phone">Phone</label>
                        </div>
                     </div>
                     <div class="col-sm-6">
                        <select class="form-select">
                           <option selected>More Info</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                        </select>
                     </div>
                     <div class="col-12">
                        <div class="form-floating">
                           <textarea
                              class="form-control"
                              name="message"
                              id="message"
                              cols="30"
                              rows="50"
                              placeholder="Message"
                           ></textarea>
                           <label for="message">Message</label>
                        </div>
                     </div>
                  </div>
                  <PrimaryBtn type="submit" innerHTML="SEND" />
               </form>
               <!-- /form message -->
            </div>
            <div class="col-12 col-sm-6 col-md-4"></div>
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
.form-control {
   &:focus {
      background-color: var(--neutral-color-200);
   }
}
.form-control,
.form-select {
   background-color: var(--neutral-color-200);
}

.form-select {
   padding: 1rem 0.75rem;
   border: none;
}

textarea.form-control {
   overflow-y: auto;
   height: 11rem;
}

button {
   padding: 0.5rem 2rem;
}
</style>
