export default {
  FETCH_SHOPPING (state, payload) {
    state.shop.listDatas = payload;
  },
  DETAIL_SHOPPING (state, payload) {
    state.shop.detailData = payload;
  },
  FETCH_CART (state, payload) {
    state.cart.listDatas = payload;
  },
  DETAIL_CHART_ITEM (state, payload) {
    state.shop.chartData = payload;
  }
}