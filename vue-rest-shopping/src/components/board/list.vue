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
        <tr class=" even">
          <td class="td_num2">1</td>

          <td class="td_subject" style="padding-left:0px">
            <div class="bo_tit">
              <router-link :to="`/board/${this.url_path}/view/1`">테스트 게시글 1번 입니다.</router-link>
              <span class="new_icon">N<span class="sound_only">새글</span></span>
              <span class="sound_only">댓글</span><span class="cnt_cmt">1</span><span class="sound_only">개</span>
            </div>
          </td>
          <td class="td_name sv_use"><span class="sv_guest">admin</span></td>
          <td class="td_num">1</td>
          <td class="td_datetime">2019-12-13</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['board_data', 'url_path']
}
</script>

<style>

</style>