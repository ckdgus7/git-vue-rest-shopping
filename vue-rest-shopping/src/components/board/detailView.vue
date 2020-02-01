<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    this.setBoardData(this.$route);
  },
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST',
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