<template>
  <div class="home-content">
    <div>
      <h1>
        1. API Server Info : LAPM (Linux, Apache, php5, mysql 5) &nbsp; &nbsp; &nbsp;
        <span class="open-api"><a href="" @click.prevent="$emit('openAPIList', 'api')">Open API List View</a></span>
      </h1>
    </div>
    <br />
    <div>
      <h1>
        2. FE 개발방법 / Foldering &nbsp; &nbsp; &nbsp;
        <span class="open-api"><a href="" @click.prevent="$emit('openDevList', 'dev')">Open Dev List View</a></span>
      </h1>
    </div>
    <br />
    <h1>2. FE 기술조사 : vue / vuex / vue-router / axios / dragula / vue-chartjs</h1>
    <br />
    <h1>3. Check List (Board)</h1>
    <ol>
      <li>게시글 리스트</li>
      <li>게시글 상세보기</li>
      <li>게시글 등록</li>
      <li>게시글 수정</li>
      <li>게시글 삭제</li>
    </ol>
    <h1>4. Check List (Shopping)</h1>
    <ol>
      <li>쇼핑 상품 리스트</li>
      <li>쇼핑 상품 상세보기</li>
    </ol>
    <h1>5. Check List (Memo)</h1>
    <ol>
      <li>Memo 리스트</li>
      <li>Memo 등록</li>
      <li>Memo 수정</li>
      <li>Memo 삭제</li>
    </ol>
    <h1>6. Check List (Interest Item)</h1>
    <ol>
      <li>인기 상품 Chart</li>
      <li>카테고리 Search</li>
    </ol>
  </div>
</template>

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