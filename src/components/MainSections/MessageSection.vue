<template>
   <section class="ms_py">
      <div class="ms_container container-fluid">
         <div class="row gx-4">
            <!-- col a sinistra -->
            <div class="col-12 col-md-6 col-lg-8 mb-3 mb-md-0">
               <h4 class="mb-4">SEND A MESSAGE</h4>
               <h2 class="mb-4">
                  Get in <strong class="primary | px-2 py-1 rounded-2"> Touch </strong>
               </h2>
               <p>We will respond to ur message on if we want to, cuz we r the best.</p>
               <!-- form message -->
               <form @submit.prevent>
                  <!-- nested row -->
                  <div class="container-fluid">
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
                  </div>
                  <!-- /nested row -->
                  <PrimaryBtn type="submit" innerHTML="SEND" />
               </form>
               <!-- /form message -->
            </div>
            <!-- /col a sinistra -->
            <!-- col a destra -->
            <div class="col-12 col-sm col-md-6 col-lg-4">
               <h3 class="fw-bold mb-4">Example Inc.</h3>
               <p>dolor sit amet consectetur adipisicing elit. Iusto, quidem! Necessitatibus</p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem doloribus
                  tempore eos vitae repellendus nam quasi, accusantium fugiat odit dolorum
               </p>
               <!-- contact info -->
               <div class="contact-info mb-4">
                  <div>
                     <i class="fa-solid fa-phone"></i>
                     {{ store.companyInfo.phoneNumber }}
                  </div>
                  <div>
                     <i class="fa-solid fa-envelope"></i>
                     {{ store.companyInfo.mail }}
                  </div>
                  <div>
                     <i class="fa-solid fa-location-crosshairs"></i>
                     {{ store.companyInfo.location }}
                  </div>
               </div>
               <!-- /contact info -->
               <SecondaryBtn innerHTML="VIEW MAP" />
            </div>
            <!-- /col a destra -->
         </div>
      </div>
   </section>
</template>

<script>
import { store } from '../../store';
import PrimaryBtn from '../btns/PrimaryBtn.vue';
import SecondaryBtn from '../btns/SecondaryBtn.vue';

export default {
   data() {
      return {
         store,
      };
   },
   components: {
      PrimaryBtn,
      SecondaryBtn,
   },
};
</script>

<style lang="scss" scoped>
// col a sinistra
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

// col a destra
.contact-info {
   div {
      @include flex-start(0.5rem);
      color: var(--primary-color);
      &:not(:last-child) {
         margin-bottom: 1rem;
      }
      i {
         @include parent-circle(2.5rem);
         font-size: 1.2rem;
         color: var(--primary-color);
         background-color: var(--primary-color-200);
      }
   }
   & + button {
      color: var(--primary-color);
      &:hover {
         background-color: var(--neutral-color-300);
      }
   }
}
</style>
