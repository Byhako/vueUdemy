import namespace from '../utils/namespace';

export default namespace('global', {
  actions: [
    'changeLanguahe',
  ],
  getters: [
    'processing',
    'language',
  ],
  mutations: [
    'startProcessing',
    'stopProcessing',
    'setLanguage',
  ],
});
