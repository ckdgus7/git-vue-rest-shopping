<template>
  <div id="bo_btn_top">
    <div id="bo_list_total">
      <span>Total <i style="color:red;">{{ this.board_count }}</i>건</span>
    </div>
    <ul class="btn_bo_user">
      <li>
        <router-link :to="`/board/${this.url_path}/write`">글쓰기</router-link>
      </li>        	        
    </ul>
  </div>
</template>

<script>
export default {
  props: ['board_count', 'url_path']
}
</script>

<style>

</style>