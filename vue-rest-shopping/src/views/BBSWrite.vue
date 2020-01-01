<template>
	<!-- 콘텐츠 시작 { -->
	<div id="wrapper">
		<div id="container_wr">
			<div id="container">
				<h2 id="container_title"><span title="자유게시판 글쓰기">자유게시판 글쓰기</span></h2>
				<!-- skin : basic -->
				<section id="bo_w">
					<h2 class="sound_only">자유게시판 글쓰기</h2>

					<!-- 게시물 작성/수정 시작 { -->
					<form name="fwrite" id="fwrite" action="" method="post" enctype="multipart/form-data" style="width:100%">

			
			
						<div class="bo_w_info write_div">
							<label for="wr_name" class="sound_only">이름<strong>필수</strong></label>
							<input type="text" name="wr_name" id="wr_name" required class="frm_input half_input required" placeholder="이름">
							<label for="wr_password" class="sound_only">비밀번호<strong>필수</strong></label>
							<input type="password" name="wr_password" id="wr_password" required class="frm_input half_input required" placeholder="비밀번호">
							<label for="wr_email" class="sound_only">이메일</label>
							<input type="text" name="wr_email" id="wr_email" class="frm_input half_input email " placeholder="이메일">
							<label for="wr_homepage" class="sound_only">홈페이지</label>
							<input type="text" name="wr_homepage" id="wr_homepage" class="frm_input half_input" size="50" placeholder="홈페이지">
						</div>
		
			
						<div class="bo_w_tit write_div">
							<label for="wr_subject" class="sound_only">제목<strong>필수</strong></label>
						
							<div id="autosave_wrapper" class="write_div">
								<input type="text" name="wr_subject" id="wr_subject" required class="frm_input full_input required" size="50">
							</div>
						
						</div>

						<div class="write_div">
							<label for="wr_content" class="sound_only">내용<strong>필수</strong></label>
							<div class="wr_content ">
								<span class="sound_only">웹에디터 시작</span>
								<textarea id="wr_content" name="wr_content" class="" maxlength="65536" style="width:100%;height:300px"></textarea>
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
export default {

}
</script>

<style>

</style>