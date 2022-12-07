/*=================================
   store dei dati in comune
==============================*/
import { reactive } from 'vue';

export const store = reactive({
   companyInfo: {
      phoneNumber: '+1 (305) 1234-5678',
      mail: 'hello@example.com',
      location: 'Main Avenue, 987',
   },
});
