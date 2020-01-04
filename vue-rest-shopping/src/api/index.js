import axios from 'axios';

const BASE_URL = '//jswrap.ivyro.net/restapi/';
const request = (method, url, params) => {
  // if(data !== null) {
  //   return axios.get(url, { params: { wr_id: data.wr_id }, timeout: 1000 });
  // } else {
    return axios({
      method,
      url,
      params,
    });
  // }
}
export const board = {
  FETCH_BOARD (bid) {
    return request('GET', `${BASE_URL}boardDataList.php`, {bid});
  },
  DETAIL_BOARD ({bid, wr_id}) {
    return request('GET', `${BASE_URL}boardDataDetail.php`, {bid, wr_id});
  },
  REGISTER_BOARD () {

  },
  UPDATE_BOARD () {

  },
  DELETE_BOARD () {

  }
}
export const shopping = {
  FETCH_SHOPPING () {

  },
  DETAIL_SHOPPING () {

  }
}

