<template>
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<BoardTitle><template slot="board_title">[ 자유게시판 업데이트 ]</template></BoardTitle>
				<BoardUpdate />
			</div>
		</div>
	</div>
</template>

<script>
import BoardTitle from '../components/board/title.vue';
import BoardUpdate from '../components/board/update.vue';
export default {
  components: {
		BoardTitle,
		BoardUpdate
	}
}
</script>

<style>

</style>