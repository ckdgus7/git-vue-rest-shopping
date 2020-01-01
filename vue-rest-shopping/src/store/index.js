import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardNum: 0,
    boards: [],
    board: {},
    shoppings: [],
    shopping: {}
  },
  getters: {
    GET_BOARDS (state) {
      return state.boards;
    },
    GET_BOARD_NUM (state) {
      return state.boardNum;
    }
  },
  mutations: {
    FETCH_BOARD (state, payload) {
      state.boards = payload;
    }
  },
  actions: {
    FETCH_BOARD ({ commit }, bid) {
      return api.board.FETCH_BOARD(bid)
        .then(res => {
          commit('FETCH_BOARD', res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
})
