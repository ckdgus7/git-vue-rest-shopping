import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000
});
const request = (method, url, params) => {
  return instance({
    method,
    url,
    params,
  });
}
export const board = {
  FETCH_BOARD ({ bid, kword }) {
    return request('GET', `boardDataList.php`, { bid, kword });
  },
  DETAIL_BOARD (payload) {
    return request('GET', `boardDataDetail.php`, payload);
  },
  INSERT_BOARD (payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request('GET', `boardDataInsert.php`, payload);
  },
  UPDATE_BOARD (payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request('GET', `boardDataUpdate.php`, payload);
  },
  DELETE_BOARD (payload) {
    return request('GET', `boardDataDelete.php`, payload);
  },
  UPDATE_POS_BOARD (payload) {
    return request('GET', `boardPosDataUpdate.php`, payload);
  }
}
export const shop = {
  FETCH_SHOPPING ({ kword, ls, la }) {
    return request('GET', `shopDataList.php`, { kword, ls, la });
  },
  DETAIL_SHOPPING ({it_id}) {
    return request('GET', `shopDataDetail.php`, {it_id});
  },
  FETCH_CART () {
    return request('GET', `shopDataCartList.php`);
  },
  INSERT_CART (payload) {
    return request('GET', `shopDataCartInsert.php`, payload);
  },
  DELETE_CART ({ct_id}) {
    return request('GET', `shopDataCartDelete.php`, {ct_id});
  },
  DELETE_ALL_CART () {
    return request('GET', `shopDataCartDelete.php`);
  },
  FETCH_SHOP_HIT_ITEM() {
    return request('GET', `shopDataInterestHit.php`);
  },
  FETCH_SHOP_PRICE_ITEM() {
    return request('GET', `shopDataInterestPrice.php`);
  }
}

