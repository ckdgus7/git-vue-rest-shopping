<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Shopping Cart List</h3>
        </div>
        <div class="modal-body">
          <div id="sod_bsk" class="od_prd_list">
            <div id="sod_bsk_act" style="text-align: right;">
              <a href="" @click.prevent="$emit('closeCartLModal')" class="btn01" style="text-align: center;">쇼핑 계속하기</a>
              <!-- <button type="button" onclick="return form_check('buy');" class="btn_submit">주문하기</button> -->
            </div>
            <div class="tbl_head03 tbl_wrap">
              <table>
                <thead>
                <tr>
                    <th scope="col" class="chk_box">
                      <label for="ct_all"><span></span><b class="sound_only">상품 전체</b></label>
                    </th>
                    <th scope="col">상품명</th>
                    <th scope="col">총수량</th>
                    <th scope="col">판매가</th>
                    <th scope="col">배송비</th>
                    <th scope="col">소계</th>
                </tr>
                </thead>
                <!-- <tbody> -->
                  <tr v-for="(list ,i) in GET_CART_LIST.list" :key="`${list.ct_id}-${i}`">
                    <td class="td_chk chk_box">
                      <label for="ct_chk_0"><span></span><b class="sound_only">상품</b></label>
                    </td>
                    <td class="td_prd">
                      <div class="sod_img"><img :src="list.it_img" width="80" height="80" alt=""></div>
                      <div class="sod_name">
                        <b>{{ list.it_name }}</b>
                        <div class="sod_option_btn"><button type="button" class="mod_options" @click="deleteCart(list.ct_id, list.it_name)">비우기</button></div>
                      </div>
                    </td>
                    <td class="td_num">{{ list.ct_qty }}</td>
                    <td class="td_numbig">{{ getPrice(list.ct_price) }}</td>
                    <td class="td_dvr">후불</td>
                    <td class="td_numbig text_right"><span id="sell_price_0" class="total_prc">{{ getPrice(list.ct_price * list.ct_qty) }}</span></td>
                  </tr>
                <!-- </tbody> -->
              </table>
              <div class="btn_cart_del">
                <!-- <button type="button">선택삭제</button> -->
                <button type="button" @click="deleteAllCart">전체 비우기</button>
              </div>
            </div>
            <div id="sod_bsk_tot">
              <ul>
                <li class="sod_bsk_pt">
                  <span>포인트</span>
                  <strong>0</strong> 점
                </li>
                <li class="sod_bsk_dvr">
                  <span>배송비</span>
                  <strong>0</strong> 원
                </li>
                <li class="sod_bsk_cnt">
                  <span>총계 가격</span>
                  <strong>{{ getTotalPrice(GET_CART_LIST.totalPrice) }}</strong> 원 
                </li>
              </ul>
            </div>
            <div id="sod_bsk_act">
              <a href="" @click.prevent="$emit('closeCartLModal')" class="btn01">쇼핑 계속하기</a>
              <!-- <button type="button" onclick="return form_check('buy');" class="btn_submit">주문하기</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '../../utils/index.js';
import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    this.FETCH_CART();
  },
  computed: {
    ...mapGetters([
      'GET_CART_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CART',
      'DELETE_CART',
      'DELETE_ALL_CART'
    ]),
    deleteCart (ct_id, it_name) {
      if( confirm(`${it_name}을(를) 장바구니에서 삭제 하시겠습니까?`) ) {
        this.DELETE_CART({ct_id})
          .then(() => {
            this.FETCH_CART();
          });
      }
    },
    deleteAllCart () {
      if( confirm(`모든 상품을 장바구니에서 삭제 하시겠습니까?`) ) {
        this.DELETE_ALL_CART()
          .then(() => {
            this.FETCH_CART();
          });
      }
    },
    getPrice (price) {
      return formatPrice(price);
    },
    getTotalPrice (price) {
      return formatPrice(price);
    }
  }
}
</script>


<style scoped>
.list-enter-active, .list-leave-active {
  transition: all .2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  /* transform: translateY(10px); */
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
  vertical-align: middle;
}

.modal-container {
  width: 1024px;
  margin: 40px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  height: 800px;
  overflow: auto;
}

.modal-header h3 {
  font-size: 22px;
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.modal-footer {
  height: 50px;
}

.modal-default-button {
  padding: 10px;
  float: right;
}

</style>