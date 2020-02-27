<template>
	<!-- 콘텐츠 시작 { -->
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<BoardTitle><template slot="board_title">[ {{ GET_BOARD_LIST.board_title }} ]</template></BoardTitle>
				<!-- skin : basic -->
				<section id="bo_w">

					<!-- 게시물 작성/수정 시작 { -->
					<form name="fwrite" id="fwrite" @submit.prevent="insertBoardData" method="post" enctype="multipart/form-data" style="width:100%">
						<input type="hidden" name="bid" id="bid" ref="bid" :value="GET_BOARD_LIST.board_id" />
			
			
						<div class="bo_w_info write_div">
							<label for="wr_name" class="sound_only">이름<strong>필수</strong></label>
							<input type="text" name="wr_name" ref="nameInput" id="wr_name" v-model.trim="inputState.wr_name" required class="frm_input half_input required" placeholder="이름">
						</div>
		
			
						<div class="bo_w_tit write_div">
							<label for="wr_subject" class="sound_only">제목<strong>필수</strong></label>
						
							<div id="autosave_wrapper" class="write_div">
								<input type="text" name="wr_subject" v-model.trim="inputState.wr_subject" id="wr_subject" required class="frm_input full_input required" size="50">
							</div>
						
						</div>

						<div class="write_div">
							<label for="wr_content" class="sound_only">내용<strong>필수</strong></label>
							<div class="wr_content ">
								<span class="sound_only">웹에디터 시작</span>
								<textarea id="wr_content" name="wr_content" v-model="inputState.wr_content" class="" maxlength="65536" style="width:100%;height:300px"></textarea>
								<span class="sound_only">웹 에디터 끝</span>                    
							</div>
						</div>
						<div class="btn_confirm write_div">
							<a href="" @click.prevent="insertCancel" class="btn_cancel btn">취소</a>
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
import { ref, reactive, computed, onMounted } from '@vue/composition-api';
import { injectStore } from '../composition_func/common/storeProvider.js';
import BoardTitle from '../components/board/title.vue';
export default {
  components: {
    BoardTitle
	},
	setup (props, { root: { $router } }) {
		const { getters, actions } = injectStore();
		const nameInput = ref(null);
		const inputState = reactive({
			wr_name: '',
			wr_subject: '',
			wr_content: ''
		});
		const GET_BOARD_LIST = computed( () => {
			return getters.GET_BOARD_LIST
		});
		const insertBoardData = () => {
			actions.INSERT_BOARD[0](
				{ 
					bid: 'bbs' ,
					wr_name: inputState.wr_name, 
					wr_subject: inputState.wr_subject, 
					wr_content: inputState.wr_content 
				}
			).then(({ data }) => {
        $router.push(`/board/${data}`);
      });
		};
		const insertCancel = () => {
			$router.push(`/board/bbs`);
		};
		onMounted( () => {
			nameInput.value.focus();
		});
		return {
			nameInput,
			inputState,
			GET_BOARD_LIST,
			insertBoardData,
			insertCancel
		}
	}
}
</script>

<style>

</style>