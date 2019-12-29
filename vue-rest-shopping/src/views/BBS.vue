<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <BoardList :bid="1" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardList from '../components/board/list.vue';
export default {
  components: {
    BoardList
  }
}
</script>