<template>
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
        <tr class=" even" v-for="listData in this.GET_BOARDS.list" :key="listData.wr_id">
          <td class="td_num2">{{ listData.wr_id }}</td>

          <td class="td_subject" style="padding-left:0px">
            <div class="bo_tit">
              <router-link :to="`/board/${GET_BOARDS.board_id}/view/${listData.wr_id}`">{{ listData.wr_title }}</router-link>
            </div>
          </td>
          <td class="td_name sv_use"><span class="sv_guest">{{ listData.wr_user }}</span></td>
          <td class="td_num">{{ listData.wr_count }}</td>
          <td class="td_datetime">{{ listData.wr_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import boardListMixin from '../../mixin/boardListMixin.js';
export default {
  mixins: [boardListMixin]
}
</script>

<style>

</style>