<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle><template slot="board_title">[ {{ GET_BOARD_LIST.board_title }} ]</template></BoardTitle>
          <div id="bo_list" style="width:100%">
            
            <BoardTop />
            <BoardList />
            <BoardBottom />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import BoardTitle from '../components/board/title.vue';
import BoardTop from '../components/board/top.vue';
import BoardList from '../components/board/list.vue';
import BoardBottom from '../components/board/bottom.vue';

export default {
  components: {
    BoardTitle,
    BoardTop,
    BoardList,
    BoardBottom
  },
  setup(porps, ctx) {
    ctx.root.$options.store._actions.FETCH_BOARD[0]({ bid:1 });
    const GET_BOARD_LIST = computed(() => {
      return ctx.root.$options.store.getters.GET_BOARD_LIST;
    });
    return {
      GET_BOARD_LIST
    }
  }
}
</script>