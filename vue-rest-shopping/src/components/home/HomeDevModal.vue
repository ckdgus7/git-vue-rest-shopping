<template>
  <Modal @close="closeModal">
    <h3 slot="header">Dev List</h3>
    <div slot="body">
      <h1>Folder</h1>
      <ol>
        <li>api : API CRUD Axios 연결</li>
        <li>assets : Image 등 Asset Data</li>
        <li>components : Page들에서 사용될 컴포넌트</li>
        <li>mixin : component에서 공통 호출 함수</li>
        <li>router : Link Page 정의 및 네비게이션 가드 설정</li>
        <li>store : vuex를 통한 state, getters, mutations, actions 정의</li>
        <li>utils : 수식 등 공통 함수 정의</li>
        <li>views : router에서 지정된 Page List</li>
      </ol>
    </div>
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
      this.$emit('closeDevList', 'dev');
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