<template>
  <transition name="cartModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Shopping Cart List
          </div>
          <div class="modal-body">
            <div id="sod_bsk" class="od_prd_list">
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
                      <th scope="col">포인트</th>
                      <th scope="col">배송비</th>
                      <th scope="col">소계</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td_chk chk_box">
                        <label for="ct_chk_0"><span></span><b class="sound_only">상품</b></label>
                      </td>
                      <td class="td_prd">
                        <div class="sod_img"><img width="80" height="80" alt=""></div>
                        <!-- <div class="sod_img"><img :src="cart.it_img" width="80" height="80" alt=""></div> -->
                        <div class="sod_name">
                          <b>카테고리 2 > 상품 3</b>
                          <div class="sod_opt">
                            <ul>
                              <li>카테고리 2 &gt; 상품 3 1개 (+0원)</li>
                            </ul>
                          </div>
                          <!-- <div class="sod_option_btn"><button type="button" @click="deleteCart(cart.it_id)" class="mod_options">비우기</button></div> -->
                          <div class="sod_option_btn"><button type="button" class="mod_options">비우기</button></div>
                        </div>
                      </td>
                      <td class="td_num">1</td>
                      <td class="td_numbig">28,000</td>
                      <td class="td_numbig">0</td>
                      <td class="td_dvr">선불</td>
                      <td class="td_numbig text_right"><span id="sell_price_0" class="total_prc">28,000</span></td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn_cart_del">
                  <!-- <button type="button">선택삭제</button> -->
                  <button type="button">전체 비우기</button>
                </div>
              </div>
              <div id="sod_bsk_tot">
                <ul>
                  <li class="sod_bsk_dvr">
                    <span>배송비</span>
                    <strong>0</strong> 원
                  </li>
                  <li class="sod_bsk_pt">
                    <span>포인트</span>
                    <strong>0</strong> 점
                  </li>
                  <li class="sod_bsk_cnt">
                    <span>총계 가격</span>
                    <strong>99,000</strong> 원 
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
  </transition>
</template>

<script>

export default {
  methods: {
    deleteCart () {

    },
    checkAll () {
      const chk = document.querySelector('#ct_all');
      const checked = chk.getAttribute('checked');
      const selectChk = document.querySelector('input[name^=ct_chk]');
      if(checked) {
        chk.setAttribute('checked', '');
        selectChk.setAttribute('checked', '');
      } else {
        chk.setAttribute('checked', 'checked');
        selectChk.setAttribute('checked', 'checked');
      }
    }
  }
}
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 1024px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>