<template>
	<!-- 콘텐츠 시작 { -->
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<BoardTitle><template slot="board_title">[ 자유게시판 업데이트 ]</template></BoardTitle>
				<!-- skin : basic -->
				<section id="bo_w">

					<!-- 게시물 작성/수정 시작 { -->
					<form name="fwrite" id="fupdate" @submit.prevent="updateBoardData" method="post" enctype="multipart/form-data" style="width:100%">
						<input type="hidden" name="bid" id="bid" ref="bid" :value="GET_BOARD_LIST.board_id" />
            <input type="hidden" name="wr_id" id="wr_id" ref="wr_id" :value="GET_BOARD.wr_id" />
			
			
						<div class="bo_w_info write_div">
							<label for="wr_name" class="sound_only">이름<strong>필수</strong></label>
							<input type="text" name="wr_name" ref="nameInput" id="wr_name" :value="GET_BOARD.wr_user"  required class="frm_input half_input required" placeholder="이름">
						</div>
		
			
						<div class="bo_w_tit write_div">
							<label for="wr_subject" class="sound_only">제목<strong>필수</strong></label>
						
							<div id="autosave_wrapper" class="write_div">
								<input type="text" name="wr_subject" ref="subjectInput" :value="GET_BOARD.wr_title" id="wr_subject" required class="frm_input full_input required" size="50">
							</div>
						
						</div>

						<div class="write_div">
							<label for="wr_content" class="sound_only">내용<strong>필수</strong></label>
							<div class="wr_content ">
								<span class="sound_only">웹에디터 시작</span>
								<textarea id="wr_content" name="wr_content" ref="contentInput" :value="GET_BOARD.wr_content" class="" maxlength="65536" style="width:100%;height:300px"></textarea>
								<span class="sound_only">웹 에디터 끝</span>                    
							</div>
						</div>
						<div class="btn_confirm write_div">
							<a href="" @click.prevent="updateCancel" class="btn_cancel btn">취소</a>
							<button type="submit" id="btn_submit" accesskey="s" class="btn_submit btn">작성완료</button>
						</div>
					</form>
				</section>
		<!-- } 게시물 작성/수정 끝 -->
			</div>
		</div>

	</div>
	<!-- } 콘텐츠 끝 -->

</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api';
import { injectStore } from '../composition_func/common/storeProvider.js';
import BoardTitle from '../components/board/title.vue';
export default {
  components: {
    BoardTitle
	},
	setup (props, { root: { $router, _route } }) {
		const { getters, actions } = injectStore();
		const GET_BOARD_LIST = computed( () => getters.GET_BOARD_LIST );
		const GET_BOARD = computed( () => getters.GET_BOARD );
		const nameInput = ref(null);
		const subjectInput = ref(null);
		const contentInput = ref(null);
		const updateBoardData = () => {
			const bid = 'bbs';
			const wr_id = GET_BOARD.value.wr_id;
			const wr_name = nameInput.value.value;
			const wr_subject = subjectInput.value.value;
			const wr_content = contentInput.value.value;
			actions.UPDATE_BOARD[0]({ bid, wr_id, wr_name, wr_subject, wr_content })
				.then(({ data }) => {
            $router.push(`/board/${data}`);
        });
		};
		const updateCancel = () => {
			const bid = _route.params.bid;
			const viewid = _route.params.viewid;
			$router.push(`/board/${bid}/view/${viewid}`);
		};
    actions.DETAIL_BOARD[0]({
			bid: {
				bid: 1,
				wr_id: _route.params.viewid
			},
			pageType: 'update'
		});
		onMounted( () => {
			nameInput.value.focus();
		});
		return {
			nameInput,
			subjectInput,
			contentInput,
			GET_BOARD_LIST,
			GET_BOARD,
			updateBoardData,
			updateCancel
		}
	}
}
</script>

<style>

</style>