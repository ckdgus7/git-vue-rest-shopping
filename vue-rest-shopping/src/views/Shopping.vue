<template>
  <div class="shop">
    <carousel :data="carouselData"></carousel>
    <div id="wrapper">
      <div id="container">
        <div class="shop-content">
          <div>
            <div style="float: left;" id="wrapper_title">Shopping List</div>
            <div style="float: right; margin-top: 25px;">검색 : 
              <input type="text" @keyup="searchList" ref="searchtext" placeholder="검색어입력" style="height: 30px; width: 200px;">
            </div>
          </div>
          <div id="sct">
            <transition-group name="list" tag="ul" class="sct sct_10 lists-row">
              <li v-for="(shopList, i) in GET_SHOPPING_LIST.list" :key="`${shopList.it_id}-${i}`" 
                class="sct_li col-row-3 list-item" data-css="nocss" style="height:auto">
                <div class="sct_img">
                    <router-link :to="`/shopping/view/${shopList.it_id}`">
                      <img :src="shopList.it_img" style="width: 230px; height: 153px;">
                    </router-link>
                  <div class="sct_btn list-10-btn">
                    <button type="button" @click="openCartModal(shopList)" class="btn_cart sct_cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니 담기
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
                      {{ getPirce(shopList.it_price) }}원
                    </div>
                  </div>
                </div>
              </li>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <transition name="component-fade" mode="out-in">
      <CartModal v-if="showCartModal" @closeCartLModal="closeCartModal" />
    </transition>
  </div>
</template>

<script>
import keySearch from 'lodash';
import shopListMixin from '../mixin/shopListMixin.js';
import cartAddMixin from '../mixin/cartAddmixin.js';

// Vue.use(VueCarousel);
export default {
  mixins: [shopListMixin, cartAddMixin],
  data() {
    return {
      carouselData: [
        '<div class="example-slide"><img src="https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w="></div>',
        '<div class="example-slide"><img src="https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w="></div>',
        '<div class="example-slide"><img src="https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w="></div>',
      ],
      kword: ''
    };
  },
  watch: {
    kword: keySearch.debounce( function() {
      const kword = this.kword;
      if(kword) {
        this.FETCH_SHOPPING({ kword });
      }
    }, 200)
  },
  methods: {
    searchList () {
      this.kword = this.$refs.searchtext.value;
    }
  }
}
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
#container .shop-content {
    position: relative;
    padding: 9px 55px;
}
</style>