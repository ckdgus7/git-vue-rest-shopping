<template>
  <div id="container">
    <h2 id="container_title"><span>[ {{ GET_BOARDS.board_title }} ]</span></h2>
    <div id="bo_list" style="width:100%">
      <div id="bo_btn_top">
        <div id="bo_list_total">
          <span>Total <i style="color:red;">{{ GET_BOARDS.board_count }}</i>건</span>
        </div>
        <ul class="btn_bo_user">
          <li>
            <a href="" class="btn_b01 btn" title="글쓰기">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <span class="sound_only">글쓰기</span></a>
          </li>        	        
        </ul>
      </div>
      <div class="tbl_head01 tbl_wrap">
        <table>
          <caption>자유게시판 목록</caption>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">글쓴이</th>
              <th scope="col">조회</th>
              <th scope="col">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr class=" even">
              <td class="td_num2">1</td>

              <td class="td_subject" style="padding-left:0px">
                <div class="bo_tit">
                  <a href="http://jswrap.ivyro.net/bbs/board.php?bo_table=free&amp;wr_id=1">
                    테스트 게시글 1번 입니다.                    
                  </a>
                  <span class="new_icon">N<span class="sound_only">새글</span></span>
                  <span class="sound_only">댓글</span><span class="cnt_cmt">1</span><span class="sound_only">개</span>                
                </div>
              </td>
              <td class="td_name sv_use"><span class="sv_guest">테스터</span></td>
              <td class="td_num">1</td>
              <td class="td_datetime">22:04</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bo_fx">
        <ul class="btn_bo_user">
          <li>
            <a href="" class="btn_b01 btn" title="글쓰기">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <span class="sound_only">글쓰기</span></a>
            </li>
        </ul>	
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['bid'],
  computed: {
    ...mapGetters([
      'GET_BOARDS'
    ])
  },
  created () {
    this.FETCH_BOARD(this.bid);
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ])
  }
}
</script>

<style>

</style>