<template>
  <div id="bo_btn_top">
    <ul class="btn_bo_user" v-if="this.GET_BOARD_LIST.board_id === 'bbs'">
      <li>
        <router-link class="btn_b01 btn" :to="`/board/${GET_BOARD_LIST.board_id}/write`">글쓰기</router-link>
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