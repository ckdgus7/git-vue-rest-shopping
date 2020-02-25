<template>
  <div id="bo_btn_top">
    <div id="bo_list_total">
      <span>Total <span style="color:red;">{{ GET_BOARD_LIST.board_count }}</span>건</span>
    </div>
    <ListBtn />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListBtn from './listBtn.vue';
export default {
  props: ['board_count'],
  components: {
    ListBtn
  },
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST'
    ])
  }
}
</script>