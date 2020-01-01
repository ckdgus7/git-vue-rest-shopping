<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle :board_title="this.boardTitle" />
          <div id="bo_list" style="width:100%">
            
            <BoardTop :board_count="this.boardCount" :url_path="this.urlPath" />
            <BoardList :board_data="this.boardData" :url_path="this.urlPath" />
            <BoardBttom :url_path="this.urlPath" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
  computed: {
    ...mapGetters([
      'GET_BOARDS'
    ])
  },
  created () {
    this.boardNum = this.$store.state.boardNum;
    this.FETCH_BOARD(this.boardNum)
      .then(() => {
        this.boardData = this.$store.state.boards;
        this.boardCount = this.boardData.length;
        this.boardTitle = this.boardData.board_title;
      });
  },
  watch: {
    '$route' (to) {
    console.log(to.path);
      if(to.path.indexOf('bbs') > -1) {
        this.boardNum = 1;
      } else {
        this.boardNum = 2;
      }
      this.$store.state.boardNum = this.boardNum;
      this.FETCH_BOARD(this.boardNum);
      this.boardData = this.$store.state.boards;
      this.boardCount = this.boardData.length;
      this.boardTitle = this.boardData.board_title;
    }
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ])
  }
}
</script>