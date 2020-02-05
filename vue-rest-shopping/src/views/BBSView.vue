<template>
  <div id="wrapper">
    <div id="container_wr">
      <div id="container">
				<BoardTitle><template slot="board_title">[ {{ GET_BOARD_LIST.board_title }} ]</template></BoardTitle>
        <DetailView :GET_BOARD_LIST="GET_BOARD_LIST" />
        <DetailComment :GET_BOARD_LIST="GET_BOARD_LIST"/>
      </div>
    </div>
  </div>
</template>

<script>
import DetailView from '../components/board/detailView.vue';
import DetailComment from '../components/board/detailComment.vue';
import boardListMixin from '../mixin/boardListMixin.js';
export default {
  mixins: [boardListMixin],
  components: {
    DetailView,
    DetailComment
  }
}
</script>