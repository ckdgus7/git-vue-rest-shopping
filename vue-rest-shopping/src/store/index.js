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
    },
    cart: {
      listDatas: []
    }
  },
  getters: {
    GET_BOARD_LIST (state) {
      return state.board.listDatas;
    },
    GET_BOARD (state) {
      return state.board.detailData;
    },
    GET_SHOPPING_LIST (state) {
      return state.shop.listDatas;
    },
    GET_SHOPPING (state) {
      return state.shop.detailData;
    },
    GET_CART_LIST (state) {
      return state.cart.listDatas;
    }
  },
  mutations: {
    FETCH_BOARD (state, payload) {
      state.board.listDatas = payload;
    },
    DETAIL_BOARD (state, payload) {
      state.board.detailData = payload;
    },
    FETCH_SHOPPING (state, payload) {
      state.shop.listDatas = payload;
    },
    DETAIL_SHOPPING (state, payload) {
      state.shop.detailData = payload;
    },
    FETCH_CART (state, payload) {
      state.cart.listDatas = payload;
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
    },
    async FETCH_SHOPPING ({ commit }) {
      const response = await api.shop.FETCH_SHOPPING();
      commit('FETCH_SHOPPING', response.data);
      return response;
    },
    async DETAIL_SHOPPING ({ commit }, itid) {
      const response = await api.shop.DETAIL_SHOPPING(itid);
      commit('DETAIL_SHOPPING', response.data);
      return response;
    },
    async FETCH_CART ({ commit }) {
      const response = await api.shop.FETCH_CART();
      commit('FETCH_CART', response.data);
      return response;
    },
    async INSERT_CART (_, payload) {
      const response = await api.shop.INSERT_CART(payload);
      return response;
    },
    async DELETE_CART (_, payload) {
      const response = await api.shop.DELETE_CART(payload);
      return response;
    },
    async DELETE_ALL_CART () {
      const response = await api.shop.DELETE_ALL_CART();
      return response;
    }
  }
})
