<template>
  <div class="board-wrapper">
    <div class="board">
      <div class="board-header">
				<BoardTitle><template slot="board_title">메모장 (dragula : Card를 drag&drop 해보세요)</template></BoardTitle>
      </div>
      <div class="list-section-wrapper">
        <div class="list-section">
          <div class="list-wrapper" 
            v-for="(listData, i) in GET_BOARD_LIST.list" 
            :key="`${i}-${listData.wr_pos}`">
            <div class="list"
                :data-card-id="listData.wr_id" 
                :data-card-pos="listData.wr_pos">
              <div class="card-list">
                <div class="card-item">
                    <div>{{ listData.wr_title }}</div>
                    <div style="margin-top: 20px;">
                      <div>내용 :</div>
                      <div style="margin-top: 5px;" v-html="setContent(listData.wr_content)"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardTitle from '../components/board/title.vue';
import { ref, computed, onUpdated } from '@vue/composition-api';
import { injectStore } from '../composition_func/common/storeProvider.js';
import { replaceAll } from '../utils/index.js';
import dragula from 'dragula';
import 'dragula/dist/dragula.css';
export default {
  components: {
    BoardTitle
  },
  setup (props, { root: { $el } }) {
    const { getters, actions } = injectStore();
    const drakeList = ref(null);
    const GET_BOARD_LIST = computed( () => getters.GET_BOARD_LIST);
    
		const updateBoardData = (targetCard) => {
			const bid = 'bbs';
      const wr_id = targetCard.id;
      const wr_1 = targetCard.pos;
			actions.UPDATE_POS_BOARD[0]({bid,wr_id,wr_1});
    };

    const setContent = (wr_content) => {
      let cont = decodeURIComponent(wr_content);
      cont = replaceAll(cont, '\n', '<br>');
      return cont;
    };

    onUpdated ( () => {
      if (drakeList.value) drakeList.value.destroy();
      drakeList.value = dragula([...$el.querySelectorAll('.list-section')])
      .on('drop', (el, wrapper) => {
        const targetCard = {
          id: el.firstChild.dataset.cardId * 1, 
          pos: 65535,
        }
        let prevCard = null
        let nextCard = null

        Array.from(wrapper.querySelectorAll('.list'))
          .forEach((el, idx, arr) => {
            const cardId = el.dataset.cardId * 1;
            if (targetCard.id === cardId) {
              prevCard = idx > 0 ? {
                pos: arr[idx - 1].dataset.cardPos * 1
              } : null;
              nextCard = idx < arr.length - 1 ? {
                pos: arr[idx + 1].dataset.cardPos * 1
              } : null;
            }
          })

        if (!prevCard && nextCard) targetCard.pos = nextCard.pos / 2;
        else if (!nextCard && prevCard) targetCard.pos = prevCard.pos * 2;
        else if (nextCard && prevCard) targetCard.pos = (prevCard.pos + nextCard.pos) / 2;
        updateBoardData(targetCard);
      });
    });

    actions.FETCH_BOARD[0]({bid:1});

    return {
      GET_BOARD_LIST,
      setContent
    }
  }
}
</script>

<style scoped>
.board-wrapper {
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.board {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.board-header {
  flex: none;
  padding: 8px 4px 8px 8px;
  margin: 0;
  height: 32px;
  line-height: 32px;
} 
.board-title {
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
}
.list-section-wrapper {
  flex-grow: 1;
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
}
.list-section {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 10px;
}
.list-wrapper {
  display: inline-block;
  min-height: 300px;
  /* width: 372px; */
  vertical-align: top;
  margin-right: 5px;
}
.card-item.gu-transit {
  background-color: #555 !important;
}
.card-item.gu-mirror {
  opacity: 1 !important;
  background-color: #fff !important;
  transform: rotate(3deg) !important;
}
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  min-height: 300px;
}
.card-list {
  flex: 1 1 auto;
  min-height: 300px;
  /* overflow-y: scroll; */
}
.card-item {
  
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  margin: 8px;
  padding: 6px 20px 2px 8px;
  box-shadow: 0 1px 0 #ccc;
  position: relative;
}
.card-item:hover,
.card-item:focus {
  background-color: rgba(0,0,0, .1);
  cursor: pointer;
}
.card-item-meta {
  font-size: 26px;
  padding: 5px 0 0 3px;
  color: #8c8c8c;  
}
</style>
