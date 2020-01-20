import axios from 'axios';

const BASE_URL = '//jswrap.ivyro.net/restapi/';
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
  DETAIL_BOARD ({bid, wr_id}) {
    return request('GET', `${BASE_URL}boardDataDetail.php`, {bid, wr_id});
  },
  INSERT_BOARD ({bid, wr_name, wr_subject, wr_content}) {
    return request('GET', `${BASE_URL}boardDataInsert.php`, {bid, wr_name, wr_subject, wr_content});
  },
  UPDATE_BOARD ({bid, wr_id, wr_name, wr_subject, wr_content}) {
    return request('GET', `${BASE_URL}boardDataUpdate.php`, {bid, wr_id, wr_name, wr_subject, wr_content});
  },
  DELETE_BOARD ({bid, wr_id}) {
    return request('GET', `${BASE_URL}boardDataDelete.php`, {bid, wr_id});
  },
  UPDATE_POS_BOARD ({bid, wr_id, wr_1}) {
    return request('GET', `${BASE_URL}boardPosDataUpdate.php`, {bid, wr_id, wr_1});
  }
}
export const shop = {
  FETCH_SHOPPING () {

  },
  DETAIL_SHOPPING () {

  },
  INTEREST_SHOP_ITEM() {

  }
}

