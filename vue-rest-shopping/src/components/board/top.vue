<template>
  <div id="bo_btn_top">
    <div id="bo_list_total">
      <span>Total <i style="color:red;">{{ this.GET_BOARDS.board_count }}</i>건</span>
    </div>
    <ul class="btn_bo_user" v-if="this.GET_BOARDS.board_id === 'bbs'">
      <li>
        <router-link :to="`/board/${GET_BOARDS.board_id}/write`">글쓰기</router-link>
      </li>        	        
    </ul>
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