import { createApp } from 'vue';
import { createStore } from 'vuex';
import primeVue from 'primevue/config';
import button from 'primevue/button';
import toastService from 'primevue/toastservice';
import toast from 'primevue/toast';
import card from 'primevue/card';
import dialog from 'primevue/dialog';
import inputText from 'primevue/inputtext';
import textarea from 'primevue/textarea';
import confirmationService from 'primevue/confirmationservice';
import confirmDialog from 'primevue/confirmdialog';
import paginator from 'primevue/paginator';
import autoComplete from 'primevue/autocomplete';
import App from './App.vue';
import router from './router';

const store = createStore({
  state() {
    return {
      booksPageCurrentStart: 0,
      booksPageCurrentEnd: 0,
      bookKeyWord: '',
    };
  },
  mutations: {
    endowBooksPageCurrentStart(state, current) {
      state.booksPageCurrentStart = Number(current);
    },
    endowBooksPageCurrentEnd(state, current) {
      state.booksPageCurrentEnd = Number(current);
    },
    endowBooksKeyWord(state, current) {
      state.bookKeyWord = current;
    },
  },
});

export const app = createApp(App);
app.use(store);
app.use(router);
app.use(primeVue);
app.use(toastService);
app.use(confirmationService);
app.component('p-button', button);
app.component('p-toast', toast);
app.component('p-card', card);
app.component('p-dialog', dialog);
app.component('p-inputtext', inputText);
app.component('p-textarea', textarea);
app.component('p-confirm-dialog', confirmDialog);
app.component('p-paginator', paginator);
app.component('p-auto-complete', autoComplete);
app.mount('#app');
