import axios from 'axios';

const BASE_URL = '//jswrap.ivyro.net/restapi/';
const request = (method, url, data) => {
  return axios({
    method: method,
    url: url,
    data: data
  });
}
export const board = {
  FETCH_BOARD (bid) {
    let path = null;
    const boardId = parseInt(bid);
    if(boardId === 1) {
      path = 'boardDataList';
    } else if(boardId === 2) {
      path = 'boardNoticeDataList';
    }
    return request('GET', `${BASE_URL}${path}.php`);
  },
  DETAIL_BOARD () {

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

