import axios from 'axios';

const BASE_URL = 'http://jswrap.ivyro.net/restapi/';
const request = (method, url, params) => {
  return axios({
    method,
    url,
    params,
  });
}
export const board = {
  FETCH_BOARD (bid) {
    return request('GET', `${BASE_URL}boardDataList.php`, {bid});
  },
  DETAIL_BOARD (payload) {
    return request('GET', `${BASE_URL}boardDataDetail.php`, payload);
  },
  INSERT_BOARD (payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request('GET', `${BASE_URL}boardDataInsert.php`, payload);
  },
  UPDATE_BOARD (payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request('GET', `${BASE_URL}boardDataUpdate.php`, payload);
  },
  DELETE_BOARD (payload) {
    return request('GET', `${BASE_URL}boardDataDelete.php`, payload);
  },
  UPDATE_POS_BOARD (payload) {
    return request('GET', `${BASE_URL}boardPosDataUpdate.php`, payload);
  }
}
export const shop = {
  FETCH_SHOPPING () {
    return request('GET', `${BASE_URL}shopDataList.php`);
  },
  DETAIL_SHOPPING ({it_id}) {
    return request('GET', `${BASE_URL}shopDataDetail.php`, {it_id});
  },
  FETCH_CART () {
    return request('GET', `${BASE_URL}shopDataCartList.php`);
  },
  INSERT_CART (payload) {
    return request('GET', `${BASE_URL}shopDataCartInsert.php`, payload);
  },
  DELETE_CART ({ct_id}) {
    return request('GET', `${BASE_URL}shopDataCartDelete.php`, {ct_id});
  },
  DELETE_ALL_CART () {
    return request('GET', `${BASE_URL}shopDataCartDelete.php`);
  },
  FETCH_SHOP_HIT_ITEM() {
    return request('GET', `${BASE_URL}shopDataInterestHit.php`);
  },
  FETCH_SHOP_PRICE_ITEM() {
    return request('GET', `${BASE_URL}shopDataInterestPrice.php`);
  }
}

