<template>
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<BoardTitle><template slot="board_title">[ 자유게시판 글쓰기 ]</template></BoardTitle>
				<BoardWrite />
			</div>
		</div>
	</div>
</template>

<script>
import BoardTitle from '../components/board/title.vue';
import BoardWrite from '../components/board/write.vue';
export default {
  components: {
		BoardTitle,
		BoardWrite
	}
}
</script>