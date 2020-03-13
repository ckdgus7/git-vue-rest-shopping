<template>
  <div id="wrapper">
    <div id="container_wr">
      <div id="container">
				<BoardTitle><template #board_title>[ 자유게시판 상세보기 ]</template></BoardTitle>
        <DetailView />
        <DetailComment/>
      </div>
    </div>
  </div>
</template>

<script>
import BoardTitle from '../components/board/title.vue';
import DetailView from '../components/board/detailView.vue';
import DetailComment from '../components/board/detailComment.vue';
export default {
  props: {
    viewid: {
      type: String,
      require: true
    }
  },
  components: {
    BoardTitle,
    DetailView,
    DetailComment
  },
  mounted() {
    console.log(`route props 전달 테스트 viewid => ${this.viewid}`);
  }
}
</script>