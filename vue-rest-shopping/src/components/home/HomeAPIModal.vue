<template>
  <Modal @close="closeModal">
    <h3 slot="header">API List</h3>
    <div slot="body">
      <br />
      <h1>Board</h1>
      <ol>
        <li>게시글 리스트 : http://jswrap.ivyro.net/restapi/boardDataList.php</li>
        <li>게시글 상세보기 : http://jswrap.ivyro.net/restapi/boardDataDetail.php</li>
        <li>게시글 등록 : http://jswrap.ivyro.net/restapi/boardDataInsert.php</li>
        <li>게시글 수정 : http://jswrap.ivyro.net/restapi/boardDataUpdate.php</li>
        <li>게시글 삭제 : http://jswrap.ivyro.net/restapi/boardDataDelete.php</li>
      </ol>
      <br />
      <hr>
      <br />
      <h1>Memo</h1>
      <ol>
        <li>plugin : drag&drop [dragula]</li>
        <li>별도 CRUD는 생성하지 않고 자유게시판 글 내용으로 연동</li>
      </ol>
      <br />
      <hr>
      <br />
      <h1>Shopping</h1>
      <ol>
        <li>쇼핑 상품 리스트 : http://jswrap.ivyro.net/restapi/shopDataList.php</li>
        <li>쇼핑 상품 상세보기 : http://jswrap.ivyro.net/restapi/shopDataView.php</li>
        <li>장바구니 리스트 : http://jswrap.ivyro.net/restapi/shopDataCartList.php</li>
        <li>장바구니 등록 : http://jswrap.ivyro.net/restapi/shopDataCartInsert.php</li>
        <li>장바구니 비우기 : http://jswrap.ivyro.net/restapi/shopDataCartDelete.php</li>
      </ol>
      <br />
      <hr>
      <br />
      <h1>Shopping Interest Item</h1>
      <ol>
        <li>Shopping Interest : http://jswrap.ivyro.net/restapi/shopDataInterest.php</li>
      </ol>
    </div>
    <!-- <template slot="footer">
      <button class="modal-default-button" @click="$emit('close')">
        CLOSE
      </button>
    </template> -->
  </Modal>
</template>

<script>

import Modal from '../Modal.vue';
export default {
  components: {
    Modal
  },
  methods: {
    closeModal () {
      this.$emit('closeAPIList', 'api');
    }
  }
}
</script>

<style scoped>
.modal-default-button {
  padding: 10px;
  float: right;
}
ol li {
  line-height: 30px;
}
h1 {
  color: blueviolet;
  font-size: 16px;
}
</style>