<template>
  <section id="bo_w">
    <form name="fwrite" id="fupdate" @submit.prevent="updateBoardData" method="post" enctype="multipart/form-data" style="width:100%">
      <input type="hidden" name="bid" id="bid" ref="bid" :value="GET_BOARD_LIST.board_id" />
      <input type="hidden" name="wr_id" id="wr_id" ref="wr_id" :value="GET_BOARD.wr_id" />
      <div class="bo_w_info write_div">
        <label for="wr_name" class="sound_only">이름</label>
        <input type="text" name="wr_name" ref="focusinput" id="wr_name" v-model.trim="inputState.wr_name"  required class="frm_input half_input required" placeholder="이름">
      </div>
      <div class="bo_w_tit write_div">
        <label for="wr_subject" class="sound_only">제목</label>
        <div id="autosave_wrapper" class="write_div">
          <input type="text" name="wr_subject" ref="subjectInput" v-model.trim="inputState.wr_subject" id="wr_subject" required class="frm_input full_input required" size="50">
        </div>
      </div>
      <div class="write_div">
        <label for="wr_content" class="sound_only">내용</label>
        <div class="wr_content ">
          <textarea id="wr_content" name="wr_content" ref="contentInput" v-model.trim="inputState.wr_content" class="" maxlength="65536" style="width:100%;height:300px"></textarea>
        </div>
      </div>
      <div class="btn_confirm write_div">
        <a href="" @click.prevent="updateCancel" class="btn_cancel btn">취소</a>
        <button type="submit" id="btn_submit" accesskey="s" class="btn_submit btn">작성완료</button>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';
import { injectStore } from '../../composition_func/common/storeProvider.js';
import { useInputFocus } from '../../composition_func/board/firstInputFocus.js';
export default {
	setup (props, { root: { $router, _route } }) {
		const { getters, actions } = injectStore();
		const GET_BOARD_LIST = computed( () => getters.GET_BOARD_LIST );
		const GET_BOARD = computed( () => getters.GET_BOARD );
		const inputState = reactive({
			wr_name: '',
			wr_subject: '',
			wr_content: ''
		});
		const updateBoardData = () => {
			actions.UPDATE_BOARD[0](
				{ 
					bid: 'bbs' ,
					wr_name: inputState.wr_name, 
					wr_subject: inputState.wr_subject, 
					wr_content: inputState.wr_content,
					wr_id: GET_BOARD.value.wr_id
				})
				.then( () => {
            $router.push(`/board/bbs`);
        });
		};
		const updateCancel = () => {
			const bid = _route.params.bid;
			const viewid = _route.params.viewid;
			$router.push(`/board/${bid}/view/${viewid}`);
		};
		const focusinput = useInputFocus();
    actions.DETAIL_BOARD[0]({
			bid: {
				bid: 1,
				wr_id: _route.params.viewid
			},
			pageType: 'update'
		})
		.then( () => {
			inputState.wr_name = GET_BOARD.value.wr_user;
			inputState.wr_subject = GET_BOARD.value.wr_title;
			inputState.wr_content = GET_BOARD.value.wr_content;
		});
		return {
			focusinput,
			inputState,
			GET_BOARD_LIST,
			GET_BOARD,
			updateBoardData,
			updateCancel
		}
	}
}
</script>