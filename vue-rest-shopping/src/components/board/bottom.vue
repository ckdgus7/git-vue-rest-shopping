<template>
  <div id="bo_btn_top">
    <ul class="btn_bo_user" v-if="this.GET_BOARDS.board_id === 'bbs'">
      <li>
        <router-link :to="`/board/${this.GET_BOARDS.board_id}/write`">글쓰기</router-link>
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