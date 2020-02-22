import * as api from '../../../api/index.js';
export default {
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