<template>
  <div>
    <article id="bo_v" style="width:100%; padding: 20px" v-if="GET_BOARD_LIST.board_id === 'qna'">
      <!-- 댓글 시작 { -->
      <section id="bo_vc">
        <h2>댓글목록</h2>
        <article id="c_2" >
          <!-- <div class="pf_img"><img src="http://jswrap.ivyro.net/img/no_profile.gif" alt="profile_image"></div> -->
          <div class="cm_wrap">
            <header style="z-index:2">
              <h2>댓글 테스터님의  댓글</h2>
              <span class="guest">댓글 테스터</span>	            	            <span class="sound_only">작성일</span>
              <span class="bo_vc_hdinfo"><i class="fa fa-clock-o" aria-hidden="true"></i> <time datetime="2019-12-28T22:05:00+09:00">19-12-28 22:05</time></span>
            </header>
            <!-- 댓글 출력 -->
            <div class="cmt_contents">
              <p>게시글 1번 / 댓글 1번</p>
            </div>
            <span id="edit_2" class="bo_vc_w"></span><!-- 수정 -->
            <span id="reply_2" class="bo_vc_w"></span><!-- 답변 -->
            <textarea id="save_comment_2" style="display:none">게시글 1번 / 댓글 1번</textarea>
          </div>
          <div class="bo_vl_opt">
            <button type="button" class="btn_cm_opt btn_b01 btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i><span class="sound_only">댓글 옵션</span></button>
            <ul class="bo_vc_act">
              <li><a href="" onclick="comment_box('2', 'c'); return false;">답변</a></li>
              <li><a href="" onclick="return comment_delete();">삭제</a></li>
            </ul>
          </div>
        </article>
      </section>
      <!-- } 댓글 끝 -->
      <!-- 댓글 쓰기 시작 { -->
      <aside id="bo_vc_w" class="bo_vc_w" >
        <h2>댓글쓰기</h2>
        <form name="fviewcomment" id="fviewcomment" action="" method="post" autocomplete="off">
          <span class="sound_only">내용</span>
          <textarea name="wr_content" maxlength="10000" placeholder="댓글내용을 입력해주세요"></textarea>
          <div class="bo_vc_w_wr">
            <div class="bo_vc_w_info">
              <label for="wr_name" class="sound_only">이름<strong> 필수</strong></label>
              <input type="text" name="wr_name" value="" id="wr_name" required class="frm_input required" size="25" placeholder="이름">
              <label for="wr_password" class="sound_only">비밀번호<strong> 필수</strong></label>
              <input type="password" name="wr_password" id="wr_password" required class="frm_input required" size="25" placeholder="비밀번호">                                     
            </div>
            <div class="btn_confirm">
              <button type="submit" id="btn_submit" class="btn_submit">댓글등록</button>
            </div>
          </div>
        </form>
      </aside>
      <!-- } 댓글 쓰기 끝 -->
    </article>
  </div>
</template>

<script>
export default {
  props: ['GET_BOARD_LIST']
}
</script>

<style>

</style>