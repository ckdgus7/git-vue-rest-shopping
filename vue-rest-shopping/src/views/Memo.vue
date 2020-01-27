<template>
  <div class="board-wrapper">
    <div class="board">
      <div class="board-header">
        <span class="board-header-btn board-title">메모장 (dragula : Card를 drag&drop 해보세요)</span>
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
                    <div>{{ listData.wr_content }}</div>
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
import { mapActions } from 'vuex';
import dragula from 'dragula';
import 'dragula/dist/dragula.css';
import boardListMixin from '../mixin/boardListMixin.js';
export default {
  data() {
    return {
      drakeList: null
    }
  },
  mixins: [boardListMixin],
  created () {
    this.setBoardData(1);
  },
  updated () {
    if (this.drakeList) this.drakeList.destroy();
    const targetParent = '.list-section';
    const targetItem = '.list';
    this.dradrakeListke = dragula([...this.$el.querySelectorAll(targetParent)])
    .on('drop', (el, wrapper) => {
      const targetCard = {
        id: el.firstChild.dataset.cardId * 1, 
        pos: 65535,
      }
      let prevCard = null
      let nextCard = null

      Array.from(wrapper.querySelectorAll(targetItem))
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
      this.updateBoardData(targetCard);
    });
  },
  methods: {
    ...mapActions([
			'UPDATE_POS_BOARD'
    ]),
    setBoardData (num) {
      this.FETCH_BOARD(num)
        .then(() => {
        });
    },
		updateBoardData (targetCard) {
			const bid = 'bbs';
      const wr_id = targetCard.id;
      const wr_1 = targetCard.pos;
			this.UPDATE_POS_BOARD({bid,wr_id,wr_1})
				.then(() => {
            this.setBoardData(1);
        });
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
  width: 372px;
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
