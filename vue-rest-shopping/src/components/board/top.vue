<template>
  <div id="bo_btn_top">
    <div id="bo_list_total">
      <span>Total <i style="color:red;">{{ this.boardCount }}</i>건</span>
    </div>
    <ul class="btn_bo_user" v-if="useWriteBtn">
      <li>
        <router-link :to="`/board/${this.urlPath}/write`">글쓰기</router-link>
      </li>        	        
    </ul>
  </div>
</template>

<script>
export default {
  props: ['boardCount', 'urlPath'],
  data () {
    return {
      useWriteBtn: false
    }
  },
  created () {
    if(this.urlPath == 'bbs') {
      this.useWriteBtn = true;
    } else {
      this.useWriteBtn = false;
    }
  }
}
</script>

<style>

</style>