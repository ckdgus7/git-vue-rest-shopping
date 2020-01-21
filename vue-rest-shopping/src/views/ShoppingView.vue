<template>
  <div id="shopview">
    <div id="wrapper">
      <div id="container">
        <div class="shop-content is_item">
          <div id="wrapper_title">카테고리 2 > 상품 3 &gt; 카테고리 1</div>
          <div id="sit">
            <div id="sit_ov_from">
              <div id="sit_ov_wrap">
                <div id="sit_pvi">
                  <div id="sit_pvi_big">
                    <a href="#" class="popup_item_image visible">
                      <img src="http://jswrap.ivyro.net/data/item/1577631241/thumb-6_300x300.jpg" width="300" height="300" alt="">
                    </a>
                  </div>
                </div>
                <section id="sit_ov" class="2017_renewal_itemform">
                  <h2 id="sit_title">카테고리 2 > 상품 3 <span class="sound_only">요약정보 및 구매</span></h2>
                  <p id="sit_opt_info">
                      상품 선택옵션 0 개, 추가옵션 0 개
                  </p>
                  <div class="sit_info">
                    <table class="sit_ov_tbl">
                      <colgroup>
                          <col class="grid_3">
                          <col>
                      </colgroup>
                      <tbody>
                      <tr class="tr_price">
                          <th scope="row">판매가격</th>
                          <td>
                              <strong>28,000원</strong>
                              <input type="hidden" id="it_price" value="28000">
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
                    <button type="submit" onclick="document.pressed=this.value;" value="장바구니" class="sit_btn_cart">장바구니</button>
                    <!-- <button type="submit" onclick="document.pressed=this.value;" value="바로구매" class="sit_btn_buy">바로구매</button> -->
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container {
    width: 1310px;
}
#sit_ov {
    padding-top: 100px;
}
#sit_opt_added li {
    border: 0px solid #e6e9ed;
}
</style>