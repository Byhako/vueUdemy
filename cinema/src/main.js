import Vue from 'vue';
import VueResource from 'vue-resource';
import BlockUI from 'vue-blockui';
import VeeValidate, { Validator } from 'vee-validate';
import { ClientTable } from 'vue-tables-2';
import VueI18n from 'vue-i18n';

import App from './App.vue';
import router from './router';
import store from './store';
import validatorEs from './validator/es';
import messages from './translations';

Vue.config.productionTip = false;

// Blockui
Vue.use(BlockUI);
// Validate
Validator.localize('es', validatorEs);
Vue.use(VeeValidate);
// Translations
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.state.language,
  messages,
});
// Tables
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');
// Vue Resources.  Para hacer peticions http
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:333/api/';
Vue.http.interceptors.push((request, next) => {
  request.headers.set('authorization', `Bearer ${window.localStorage.getItem('_token')}`);
  next();
});
// Vue.http.get('login');

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
