<template>
  <div class="home-content">
    <div>
      <h1>
        1. API Server Info : LAPM (Linux, Apache, php5, mysql 5) &nbsp; &nbsp; &nbsp;
        <span class="open-api"><a href="" @click.prevent="$emit('openAPIList', 'api')">Open API List View (<span style="color:red;">click!</span>)</a></span>
      </h1>
    </div>
    <br />
    <div>
      <h1>
        2. Site SPA Guide &nbsp; &nbsp; &nbsp;
        <span class="open-api"><a :href="gitLink" target="_blank">README.md (<span style="color:red;">GitHub click!</span>)</a></span>
      </h1>
    </div>
    <br />
    <h1>2. FE 기술조사 : vue / vuex / vue-router / axios / composition-api / dragula / vue-chartjs / vue-lodash / vue-carousel / vue-infinite-scrolling</h1>
    <br />
    <h1>3. Check List (Board)</h1>
    <ol>
      <li>게시글 리스트 (검색기능 추가)</li>
      <li>게시글 상세보기</li>
      <li>게시글 등록</li>
      <li>게시글 수정</li>
      <li>게시글 삭제</li>
    </ol>
    <h1>4. Check List (Memo)</h1>
    <ol>
      <li>Memo 리스트</li>
      <li>Memo Drag&Drop</li>
    </ol>
    <h1>4. Check List (Shopping)</h1>
    <ol>
      <li>쇼핑 상품 리스트 (검색기능 추가 / 마우스 스크롤 시 More Item)</li>
      <li>쇼핑 상품 상세보기</li>
      <li>리스트에서 장바구니 추가 / 리스트</li>
      <li>상세보기에서 장바구니 추가 / 리스트</li>
    </ol>
    <h1>6. Check List (Interest Item)</h1>
    <ol>
      <li>인기 상품 Chart</li>
      <li>Search Tab</li>
    </ol>
  </div>
</template>
<script>
import { getGitLink } from '../../composition_func/common/gitLink.js';
export default {
  setup () {
    const gitLink = getGitLink();
    return {
      gitLink
    }
  }
}
</script>
<style scoped>
ol {
  line-height: 30px;
}
.open-api {
  margin-left: 10px;
  padding: 6px;
  border: 1px solid skyblue;
}
</style>