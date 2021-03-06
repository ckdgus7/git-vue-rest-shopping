import Vue from 'vue';
import Vuex from 'vuex';
import state from './_state.js';
import getters from './_getters.js';
import mutations from './_mutations.js';
import actions from './_actions.js';
// import moduleBBS from './module/board/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // ,
  // modules: {
  //   bbs: moduleBBS
  // }
})
