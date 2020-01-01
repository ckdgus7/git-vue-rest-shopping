<template>
  <div id="container">
    <BoardTitle :bid="1" />
    <div id="bo_list" style="width:100%">
      <BoardTop :bid="1" />
      <BoardList :bid="1" />
      <BoardBttom :bid="1" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BoardTop from '../components/board/top.vue';
import BoardList from '../components/board/list.vue';
import BoardBttom from '../components/board/bottom.vue';
export default {
  props: ['bid'],
  components: {
    BoardTop,
    BoardList,
    BoardBttom
  },
  computed: {
    ...mapGetters([
      'GET_BOARDS'
    ])
  },
  created () {
    this.FETCH_BOARD(this.bid);
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD'
    ])
  }
}
</script>

<style>

</style>