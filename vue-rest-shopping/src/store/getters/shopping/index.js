export default {
  GET_SHOPPING_LIST (state) {
    return state.shop.listDatas;
  },
  GET_SHOPPING (state) {
    return state.shop.detailData;
  },
  GET_CART_LIST (state) {
    return state.cart.listDatas;
  },
  GET_CHART_DATA (state) {
    return state.shop.chartData;
  }
}