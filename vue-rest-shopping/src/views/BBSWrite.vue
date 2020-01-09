<template>
	<!-- 콘텐츠 시작 { -->
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<h2 id="container_title"><span>{{ GET_BOARD_LIST.board_title }} 글쓰기</span></h2>
				<!-- skin : basic -->
				<section id="bo_w">

					<!-- 게시물 작성/수정 시작 { -->
					<form name="fwrite" id="fwrite" @submit.prevent="insertBoardData" method="post" enctype="multipart/form-data" style="width:100%">
						<input type="hidden" name="bid" id="bid" ref="bid" :value="GET_BOARD_LIST.board_id" />
			
			
						<div class="bo_w_info write_div">
							<label for="wr_name" class="sound_only">이름<strong>필수</strong></label>
							<input type="text" name="wr_name" ref="wr_name" id="wr_name" v-model.trim="wr_name" required class="frm_input half_input required" placeholder="이름">
						</div>
		
			
						<div class="bo_w_tit write_div">
							<label for="wr_subject" class="sound_only">제목<strong>필수</strong></label>
						
							<div id="autosave_wrapper" class="write_div">
								<input type="text" name="wr_subject" v-model.trim="wr_subject" id="wr_subject" required class="frm_input full_input required" size="50">
							</div>
						
						</div>

						<div class="write_div">
							<label for="wr_content" class="sound_only">내용<strong>필수</strong></label>
							<div class="wr_content ">
								<span class="sound_only">웹에디터 시작</span>
								<textarea id="wr_content" name="wr_content" v-model="wr_content" class="" maxlength="65536" style="width:100%;height:300px"></textarea>
								<span class="sound_only">웹 에디터 끝</span>                    
							</div>
						</div>
						<div class="btn_confirm write_div">
							<a href="" class="btn_cancel btn">취소</a>
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
import { mapActions } from 'vuex';
import boardListMixin from '../mixin/boardListMixin.js';
export default {
	mixins: [boardListMixin],
	data () {
		return {
			wr_name: '',
			wr_subject: '',
			wr_content: ''
		}
	},
	mounted () {
		this.$refs.wr_name.focus();
	},
	methods: {
		...mapActions([
			'INSERT_BOARD'
		]),
		insertBoardData () {
			const { wr_name,wr_subject,wr_content } = this;
			const bid = this.GET_BOARD_LIST.board_id;
			this.INSERT_BOARD({bid: bid,wr_name,wr_subject,wr_content})
				.then(({ data }) => {
            this.$router.push(`/board/${data}`);
        });
		}
	}
}
</script>

<style>

</style>