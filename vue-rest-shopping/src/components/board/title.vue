<template>
  <h2 id="container_title"><span>[ {{ this.GET_BOARDS.board_title }} ]</span></h2>
</template>

<script>
import boardListMixin from '../../mixin/boardListMixin.js';
export default {
  mixins: [boardListMixin]
}
</script>

<style>

</style>