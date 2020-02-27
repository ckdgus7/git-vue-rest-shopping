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
            <router-link :class="`event-btn`" :to="`/board/bbs`">목록</router-link>
          </li>
          <li>
            <router-link :class="`event-btn`" :to="`/board/bbs/write`">글쓰기</router-link>
          </li>
          <li>
            <router-link :class="`event-btn`" :to="`/board/bbs/update/${GET_BOARD.wr_id}`">수정</router-link>
          </li>
          <li>
            <a class="event-btn" href="" @click.prevent="deleteBoardData()">삭제</a>
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
import { computed } from '@vue/composition-api';
import { injectStore } from '../../composition_func/common/storeProvider.js';
export default {
  setup (props, { root: { $router, _route } }) {
    const { getters, actions } = injectStore();
    const GET_BOARD = computed( () => getters.GET_BOARD );
    const deleteBoardData = () => {
      if(!window.confirm('삭제 하시겠습니까?')) return;
      const bid = 'bbs';
      const wr_id = GET_BOARD.value.wr_id;
      actions.DELETE_BOARD[0]({ bid, wr_id })
        .then(({ data }) => {
          $router.push(`/board/${data}`);
        });
    };
    actions.DETAIL_BOARD[0]({
      bid: {
        bid: 1,
        wr_id: _route.params.viewid
      },
      pageType: 'view'
    });
    return {
      GET_BOARD,
      deleteBoardData
    }
  }
}
</script>

<style scoped>
a.event-btn {
  font-size: 15px;
}
.bo_v_com li {
  width: 80px;
  height: 30px;
  margin-top: 10px;
}
</style>