import Vue from 'vue';
import VueResource from 'vue-resource';
import BlockUI from 'vue-blockui';
import VeeValidate from 'vee-validate';
import { ClientTable } from 'vue-tables-2';

// import globalTypes from './types/global';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Blockui
Vue.use(BlockUI);
// Validate
Vue.use(VeeValidate);
// Tables
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');
// Vue Resources.  Para hacer peticions http
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:333/api/';
// Vue.http.get('login');
Vue.http.interceptors.push((request, next) => {
  request.headers.set('authorization', `Bearer ${window.localStorage.getItem('_token')}`);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
