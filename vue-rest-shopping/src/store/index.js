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
      return await api.board.FETCH_BOARD(bid)
        .then(res => {
          commit('FETCH_BOARD', res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async DETAIL_BOARD ({ commit }, bid) {
      return await api.board.DETAIL_BOARD(bid)
        .then(res => {
          commit('DETAIL_BOARD', res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
})
