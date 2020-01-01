<template>
  <div id="bo_btn_top">
    <ul class="btn_bo_user">
      <li>
        <router-link :to="`/board/${this.url_path}/write`">글쓰기</router-link>
      </li>        	        
    </ul>
  </div>
</template>

<script>
export default {
  props: ['url_path']
}
</script>

<style>

</style>