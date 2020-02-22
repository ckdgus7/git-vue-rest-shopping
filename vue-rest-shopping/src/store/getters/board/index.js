export default {
  GET_BOARD_LIST (state) {
    return state.board.listDatas;
  },
  GET_BOARD (state) {
    return state.board.detailData;
  }
}