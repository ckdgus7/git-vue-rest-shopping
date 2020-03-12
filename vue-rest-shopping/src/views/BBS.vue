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
import { injectStore } from '../composition_func/common/storeProvider.js';
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
  setup(props, ctx) {
    console.log(ctx);
    const { getters, actions } = injectStore();
    const GET_BOARD_LIST = computed(() => {
      return getters.GET_BOARD_LIST;
    });
    actions.FETCH_BOARD[0]({ bid:1 });
    return {
      GET_BOARD_LIST
    }
  }
}
</script>