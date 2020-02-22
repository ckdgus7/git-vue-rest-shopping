export default {
  FETCH_BOARD (state, payload) {
    state.board.listDatas = payload;
  },
  DETAIL_BOARD (state, payload) {
    state.board.detailData = payload;
  }
}