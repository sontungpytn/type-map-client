import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import getters from '@/store/getters';
import app from './modules/app';

Vue.use(Vuex);
const store = new Store({
  modules: {
    app,
  },
  getters,
});
export default store;
