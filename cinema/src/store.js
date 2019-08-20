import Vue from 'vue';
import Vuex from 'vuex';
import { Validator } from 'vee-validate';

import globalTypes from './types/global';
import validatorEn from './validator/en';
import validatorEs from './validator/es';
import authModule from './modules/auth';
import cinemaModule from './modules/cinema';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processing: false,
    language: 'es',
  },
  mutations: {
    [globalTypes.mutations.setLanguage](state, lang) {
      state.language = lang;
    },
    [globalTypes.mutations.startProcessing](state) {
      state.processing = true;
    },
    [globalTypes.mutations.stopProcessing](state) {
      state.processing = false;
    },
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({ commit }, lang) => {
      commit(globalTypes.mutations.setLanguage, lang);
      switch (lang) {
        case 'en':
          Validator.localize('en', validatorEn);
          break;
        case 'es':
          Validator.localize('es', validatorEs);
          break;
        default:
          break;
      }
    },
  },
  getters: {
    [globalTypes.getters.processing]: state => state.processing,
    [globalTypes.getters.language]: state => state.language,
  },
  modules: {
    authModule,
    cinemaModule,
  },
});
