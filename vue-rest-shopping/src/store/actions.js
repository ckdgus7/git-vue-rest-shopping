import * as api from '../api';
import { replaceAll } from '../utils/index.js';
export default {
  async FETCH_BOARD ({ commit }, { bid, kword }) {
    const response = await api.board.FETCH_BOARD({ bid, kword });
    commit('FETCH_BOARD', response.data);
    return response;
  },
  async DETAIL_BOARD ({ commit }, payload) {
    const response = await api.board.DETAIL_BOARD(payload.bid);
    response.data.wr_content = decodeURIComponent(response.data.wr_content);
    if(payload.pageType == 'view') {
      response.data.wr_content = replaceAll(response.data.wr_content, '\n', '<br>');
    }
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
  async FETCH_SHOPPING ({ commit }, { kword, ls, la }) {
    const response = await api.shop.FETCH_SHOPPING({ kword, ls, la });
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
  },
  async FETCH_SHOP_HIT_ITEM ({ commit }) {
    const response = await api.shop.FETCH_SHOP_HIT_ITEM();
    commit('DETAIL_CHART_ITEM', response.data);
    return response;
  },
  async FETCH_SHOP_PRICE_ITEM ({ commit }) {
    const response = await api.shop.FETCH_SHOP_PRICE_ITEM();
    commit('DETAIL_CHART_ITEM', response.data);
    return response;
  }
}