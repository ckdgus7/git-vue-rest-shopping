<template>
  <div id="wrapper">
    <div id="container_wr">
      <div id="container">
				<BoardTitle><template slot="board_title">[ {{ GET_BOARD_LIST.board_title }} ]</template></BoardTitle>
        <!-- 게시물 읽기 시작 { -->
        <article id="bo_v" style="width:100%; padding: 20px">
          <header>
            <h2>
              <span class="bo_v_tit">제목 : {{ GET_BOARD.wr_title }}</span>
            </h2>
          </header>
          <section id="bo_v_info">
              <h2>페이지 정보</h2>
              <div class="profile_info">
                <!-- <div class="pf_img"><img src="http://jswrap.ivyro.net/img/no_profile.gif" alt="profile_image"></div> -->
                <div class="profile_info_ct">
                  <span class="sound_only">작성자</span> 
                  <strong><span class="sv_guest">{{ GET_BOARD.wr_user }}</span></strong><br>
                  <!-- <span>댓글</span>
                  <strong><a href="#bo_vc"> <i class="fa fa-commenting-o" aria-hidden="true"></i> {{ GET_BOARD.wr_comment }}건</a></strong> -->
                  <span >조회 : </span>
                  <strong><i class="fa fa-eye" aria-hidden="true"></i> {{ GET_BOARD.wr_count }}회</strong> / 
                  <strong class="if_date">
                    <span>작성일 : </span><i class="fa fa-clock-o" aria-hidden="true"></i> {{ GET_BOARD.wr_date }}
                  </strong>
              </div>
            </div>
            <!-- 게시물 상단 버튼 시작 { -->
            <div id="bo_v_top">
              <ul class="btn_bo_user bo_v_com">
                <li>
                  <router-link :style="`font-size: 15px;`" :to="`/board/${GET_BOARD_LIST.board_id}`">목록</router-link>
                </li>
                <li v-if="GET_BOARD_LIST.board_id === 'bbs'">
                  <router-link :style="`font-size: 15px;`" :to="`/board/${GET_BOARD_LIST.board_id}/write`">글쓰기</router-link>
                </li>
                <li v-if="GET_BOARD_LIST.board_id === 'bbs'">
                  <router-link :style="`font-size: 15px;`" :to="`/board/${GET_BOARD_LIST.board_id}/update/${GET_BOARD.wr_id}`">수정</router-link>
                </li>
                <li v-if="GET_BOARD_LIST.board_id === 'bbs'">
                  <a style="font-size: 15px;" href="" @click.prevent="deleteBoardData()">삭제</a>
                </li>
              </ul>
              </div>
            <!-- } 게시물 상단 버튼 끝 -->
          </section>
          <section id="bo_v_atc">
            <h2 id="bo_v_atc_title">본문</h2>
            <!-- 본문 내용 시작 { -->
            <div id="bo_v_con" v-html="GET_BOARD.wr_content"></div>
            <!-- } 본문 내용 끝 -->
          </section>
          <!-- 댓글 시작 { -->
          <section id="bo_vc" v-if="GET_BOARD_LIST.board_id === 'qna'">
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
          <aside id="bo_vc_w" class="bo_vc_w" v-if="GET_BOARD_LIST.board_id === 'qna'">
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
        <!-- } 게시글 읽기 끝 -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import boardListMixin from '../mixin/boardListMixin.js';
export default {
  mixins: [boardListMixin],
  created () {
    this.setBoardData(this.$route);
  },
  computed: {
    ...mapGetters([
      'GET_BOARD'
    ])
  },
  methods: {
    ...mapActions([
      'DETAIL_BOARD',
      'DELETE_BOARD'
    ]),
    getBoardNum (to) {
      let info = {
        bid: 1,
        wr_id: to.params.viewid
      };
      if(to.params.bid == 'bbs') {
        info.bid = 1;
      } else {
        info.bid = 2;
      }
      return info;
    },
    setBoardData (to) {
      this.DETAIL_BOARD({
				bid: this.getBoardNum(to),
				pageType: 'view'
			})
      .then(() => {
      });
    },
    deleteBoardData () {
      if(!window.confirm('삭제 하시겠습니까?')) return;
      const bid = this.GET_BOARD_LIST.board_id;
      const wr_id = this.GET_BOARD.wr_id;
      this.DELETE_BOARD({bid, wr_id})
        .then(({ data }) => {
          this.$router.push(`/board/${data}`);
        });
    }
  }
}
</script>

<style scoped>
.event-btn {
  font-size: 15px;
}
</style>