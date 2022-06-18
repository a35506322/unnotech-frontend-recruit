import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import App from './App.vue';
import router from './router';

export const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component('p-button', Button);
app.component('p-toast', Toast);
app.component('p-card', Card);
app.mount('#app');
