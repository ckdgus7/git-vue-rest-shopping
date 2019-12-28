<template>
  <div class="home">
    <div class="home-content">
      <div>
        <h1>
          1. API Server Info : LAPM (Linux, Apache, php5, mysql 5) &nbsp; &nbsp; &nbsp;
          <span class="open-api"><a href="" @click.prevent="openAPIList">Open API List View</a></span>
        </h1>
      </div>
      <br />
      <h1>2. Front 기술조사 : vue / vuex / vue-router / axios / dragula / vue-chartjs</h1>
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
      <Modal v-if="showModal" @close="showModal=false">
        <h3 slot="header">API List</h3>
        <div slot="body">
          <h1>Board</h1>
          <ol>
            <li>게시글 리스트 : http://jswrap.ivyro.net/restapi/boardDataList</li>
            <li>게시글 상세보기 : http://jswrap.ivyro.net/restapi/boardDataView</li>
            <li>게시글 등록 : http://jswrap.ivyro.net/restapi/boardDataRegister</li>
            <li>게시글 수정 : http://jswrap.ivyro.net/restapi/boardDataUpdate</li>
            <li>게시글 삭제 : http://jswrap.ivyro.net/restapi/boardDataDelete</li>
          </ol>
          <h1>Shopping</h1>
          <ol>
            <li>쇼핑 상품 리스트 : http://jswrap.ivyro.net/restapi/shoppingList</li>
            <li>쇼핑 상품 상세보기 : http://jswrap.ivyro.net/restapi/shoppingView</li>
          </ol>
          <h1>Shopping</h1>
          <ol>
            <li>Memo 리스트 : http://jswrap.ivyro.net/restapi/memoList</li>
            <li>Memo 등록 : http://jswrap.ivyro.net/restapi/memoResister</li>
            <li>Memo 수정 : http://jswrap.ivyro.net/restapi/memoDataUpdate</li>
            <li>Memo 삭제 : http://jswrap.ivyro.net/restapi/memoDataDelete</li>
          </ol>
          <h1>Shopping</h1>
          <ol>
            <li>Memo 리스트 : http://jswrap.ivyro.net/restapi/memoList</li>
            <li>Memo 등록 : http://jswrap.ivyro.net/restapi/memoResister</li>
            <li>Memo 수정 : http://jswrap.ivyro.net/restapi/memoDataUpdate</li>
            <li>Memo 삭제 : http://jswrap.ivyro.net/restapi/memoDataDelete</li>
          </ol>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components : {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openAPIList () {
      this.showModal = true;
    }
  }
}
</script>

<style scoped>
.home {
  margin: 30px;
}
ol {
  line-height: 30px;
}
.open-api {
  margin-left: 10px;
  padding: 10px;
  border: 1px solid skyblue;
}
</style>