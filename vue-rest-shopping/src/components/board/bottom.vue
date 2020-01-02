<template>
  <div id="bo_btn_top">
    <ul class="btn_bo_user" v-if="useWriteBtn">
      <li>
        <router-link :to="`/board/${this.urlPath}/write`">글쓰기</router-link>
      </li>        	        
    </ul>
  </div>
</template>

<script>
export default {
  props: ['urlPath'],
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