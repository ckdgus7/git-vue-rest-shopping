<template>
  <div id="shopview">
    <div id="wrapper">
      <div id="container">
        <div class="shop-content is_item">
          <div id="wrapper_title">{{ GET_SHOPPING.it_name  }}</div>
          <div id="sit">
            <div id="sit_ov_from">
              <div id="sit_ov_wrap">
                <div id="sit_pvi">
                  <div id="sit_pvi_big">
                    <img :src="`${GET_SHOPPING.it_img}`" width="300" height="300" 
                    :alt="`${GET_SHOPPING.it_name}`" :title="`${GET_SHOPPING.it_name}`">
                  </div>
                </div>
                <section id="sit_ov" class="2017_renewal_itemform">
                  <h2 id="sit_title">{{ GET_SHOPPING.it_name  }} <span class="sound_only">요약정보 및 구매</span></h2>
                  <p id="sit_opt_info">
                      상품 선택옵션 0 개, 추가옵션 0 개
                  </p>
                  <div class="sit_info">
                    <table class="sit_ov_tbl">
                      <colgroup>
                          <col class="grid_3">
                          <col>
                          <col>
                      </colgroup>
                      <tbody>
                      <tr class="tr_price">
                          <th scope="row">판매가격</th>
                          <td>
                              <strong>{{ new Intl.NumberFormat().format(GET_SHOPPING.it_price) }}원</strong>
                              <input type="hidden" id="it_price" value="28000">
                          </td>
                      </tr>
                      <tr>
                        <th scope="row">상품 일련번호</th>
                        <td>
                          {{ GET_SHOPPING.it_id  }}                
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">포인트</th>
                        <td>
                          0점	                
                        </td>
                      </tr>
                      <tr>
                        <th>배송비결제</th>
                        <td>주문시 결제</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <section id="sit_sel_option">
                    <ul id="sit_opt_added">
                      <li class="sit_opt_list">
                      </li>
                    </ul>
                  </section>
                  <div id="sit_tot_price"></div>
                  <div id="sit_ov_btn">
                    <button type="button" value="장바구니" title="장바구니 담기" class="sit_btn_cart" @click="openCartModal(GET_SHOPPING)">장바구니 담기</button>
                    <button type="button" @click="shopList" title="상품 리스트 보기" value="상품 리스트 보기" class="sit_btn_buy">상품 리스트 보기</button>
                    <!-- <button type="submit" onclick="document.pressed=this.value;" value="바로구매" class="sit_btn_buy">바로구매</button> -->
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CartModal v-if="showCartModal" @closeCartLModal="closeCartModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import shopListMixin from '../mixin/shopListMixin.js';
import cartAddMixin from '../mixin/cartAddmixin.js';
export default {
  mixins: [shopListMixin, cartAddMixin],
  created () {
    const it_id = this.$route.params.viewid;
    this.DETAIL_SHOPPING({it_id});
  },
  computed: {
    ...mapGetters([
      'GET_SHOPPING'
    ])
  },
  methods: {
    ...mapActions([
      'DETAIL_SHOPPING'
    ]),
    shopList () {
      this.$router.push('/shopping');
    }
  }
}
</script>

<style scoped>
#container {
    width: 1310px;
}
#sit_opt_added li {
    border: 0px solid #e6e9ed;
}
</style>