import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: {
      listDatas: [],
      detailData: {}
    },
    shop: {
      listDatas: [],
      detailData: {}
    }
  },
  getters: {
    GET_BOARD_LIST (state) {
      return state.board.listDatas;
    },
    GET_BOARD (state) {
      return state.board.detailData;
    }
  },
  mutations: {
    FETCH_BOARD (state, payload) {
      state.board.listDatas = payload;
    },
    DETAIL_BOARD (state, payload) {
      state.board.detailData = payload;
    }
  },
  actions: {
    async FETCH_BOARD ({ commit }, bid) {
      const response = await api.board.FETCH_BOARD(bid);
      commit('FETCH_BOARD', response.data);
      return response;
    },
    async DETAIL_BOARD ({ commit }, bid) {
      const response = await api.board.DETAIL_BOARD(bid);
      commit('DETAIL_BOARD', response.data);
      return response;
    },
    async INSERT_BOARD (_, payload) {
      const response = await api.board.INSERT_BOARD(payload);
      return response;
    },
    async UPDATE_BOARD (_, payload) {
      const response = await api.board.UPDATE_BOARD(payload);
      return response;
    },
    async DELETE_BOARD (_, payload) {
      const response = await api.board.DELETE_BOARD(payload);
      return response;
    },
    async UPDATE_POS_BOARD ({ commit }, payload) {
      const response = await api.board.UPDATE_POS_BOARD(payload);
      commit('FETCH_BOARD', response.data);
      return response;
    }
  }
})
