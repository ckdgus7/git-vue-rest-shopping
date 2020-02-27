<template>
  <div class="tbl_head01 tbl_wrap">
    <div style="float: right;">검색 : 
      <input type="text" @keyup="searchWord" ref="searchtext" placeholder="검색어입력" style="height: 30px; width: 200px;margin-bottom: 10px;">
    </div>
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
      <transition-group name="list" tag="tbody">
        <tr v-for="(listData, k) in GET_BOARD_LIST.list" :key="`${listData.wr_id}_${k}`" class="list-item">
          <td class="td_num2">{{ ++k }}</td>
          <td class="td_subject" style="padding-left:0px">
            <div class="bo_tit">
              <router-link :to="`/board/${GET_BOARD_LIST.board_id}/view/${listData.wr_id}`">{{ listData.wr_title }}</router-link>
            </div>
          </td>
          <td class="td_name sv_use"><span class="sv_guest">{{ listData.wr_user }}</span></td>
          <td class="td_num">{{ listData.wr_count }}</td>
          <td class="td_datetime">{{ listData.wr_date }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api';
import { injectStore } from '../../composition_func/common/storeProvider.js';
import lodash from 'lodash';
export default {
  setup () {
    const { getters, actions } = injectStore();
    const keywords = ref('');
    const searchtext = ref(null);
    const GET_BOARD_LIST = computed(() => {
      return getters.GET_BOARD_LIST;
    });
    const searchWord = () => {
      keywords.value = searchtext.value.value;
    }
    watch( () => keywords.value,
      lodash.debounce( 
        (kword) => {
          const info = {
            bid: 1,
            kword
          };
          actions.FETCH_BOARD[0](info);
        }, 
      200),
      { 
        lazy: true 
      }
    );
    return {
      GET_BOARD_LIST,
      searchWord,
      searchtext
    }
  }
}
</script>