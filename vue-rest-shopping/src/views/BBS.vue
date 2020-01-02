<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle :board-title="this.boardTitle" />
          <div id="bo_list" style="width:100%">
            
            <BoardTop :board-count="this.boardCount" :url-path="this.urlPath" />
            <BoardList :url-path="this.urlPath" />
            <BoardBttom :url-path="this.urlPath" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BoardTitle from '../components/board/title.vue';
import BoardTop from '../components/board/top.vue';
import BoardList from '../components/board/list.vue';
import BoardBttom from '../components/board/bottom.vue';
export default {
  data () {
    return {
      boardData: null,
      boardCount: 0,
      boardTitle: null,
      urlPath: null
    }
  },
  components: {
    BoardTitle,
    BoardTop,
    BoardList,
    BoardBttom
  },
  created () {
    this.setBoardData(this.$route);
  },
  watch: {
    '$route' (to) {
      this.setBoardData(to);
    }
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ]),
    getBoardNum (to) {
      let boardNum = 0;
      if(to.path.indexOf('bbs') > -1) {
        boardNum = 1;
      } else {
        boardNum = 2;
      }
      return boardNum;
    },
    setBoardData (to) {
      this.FETCH_BOARD(this.getBoardNum(to))
      .then(() => {
        this.boardData = this.$store.state.boards;
        this.boardCount = this.boardData.board_count;
        this.boardTitle = this.boardData.board_title;
        this.urlPath = this.boardData.board_id;
      });
    }
  }
}
</script>