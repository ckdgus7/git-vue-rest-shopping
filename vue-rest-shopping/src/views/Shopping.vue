<template>
  <div class="shop">
    <div id="wrapper">
      <div id="container">
        <div class="shop-content">
          <div id="wrapper_title">상품리스트</div>
          <div id="sct">
            <ul class="sct sct_10 lists-row">
              <li v-for="(shopList, i) in GET_SHOPPING_LIST.list" :key="`${shopList.it_id}-${i}`" 
                class="sct_li col-row-3" data-css="nocss" style="height:auto">
                <div class="sct_img">
                    <router-link :to="`/shopping/view/${shopList.it_id}`">
                      <img :src="shopList.it_img" style="width: 230px; height: 153px;">
                    </router-link>
                  <div class="sct_btn list-10-btn">
                    <button type="button" class="btn_cart sct_cart" :data-it_id="shopList.it_id">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니
                    </button>
                  </div>
                </div>
                <div class="sct_ct_wrap">
                  <div class="sct_txt">
                    <router-link :to="`/shopping/view/${shopList.it_id}`">
                      {{ shopList.it_name }}
                    </router-link>
                  </div>
                  <div class="sct_bottom">
                    <div class="sct_cost">
                      {{ new Intl.NumberFormat().format(shopList.it_price) }}원
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    this.FETCH_SHOPPING();
  },
  computed: {
    ...mapGetters([
      'GET_SHOPPING_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_SHOPPING'
    ])
  }
}
</script>

<style>
#container .shop-content {
    position: relative;
    padding: 9px 55px;
}
</style>