<template>
  <Modal @close="closeModal">
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
  props: ['propsdata'],
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
</style>