<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div id="wrapper">
      <div id="container">
        <ImgCarousel></ImgCarousel>
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
import { mapGetters, mapActions } from 'vuex';
import keySearch from 'lodash';
import cartAddMixin from '../mixin/cartAddmixin.js';
import ImgCarousel from '../components/shop/ImgCarousel.vue';

export default {
  mixins: [cartAddMixin],
  components: {
    ImgCarousel
  },
  data() {
    return {
      kword: '',
      busy: true,
      ls: 0,
      la: 9
    };
  },
  created () {
    const kword = '';
    const ls = this.ls;
    const la = this.la;
    this.FETCH_SHOPPING({ kword, ls, la })
      .then(() => {
        this.busy = false;
      });
  },
  computed: {
    ...mapGetters([
      'GET_SHOPPING_LIST'
    ])
  },
  watch: {
    kword: keySearch.debounce( function() {
      const kword = this.kword;
      const ls = '';
      const la = '';
      if(kword) {
        this.FETCH_SHOPPING({ kword, ls, la });
      }
    }, 200)
  },
  methods: {
    ...mapActions([
      'FETCH_SHOPPING'
    ]),
    searchList () {
      this.kword = this.$refs.searchtext.value;
    },
    loadMore () {
      this.busy = true;
      this.la += 9;
      if(this.la <= this.GET_SHOPPING_LIST.total_count) {
        setTimeout(() => {
          const kword = '';
          this.FETCH_SHOPPING({ kword, ls: this.ls, la: this.la })
            .then(() => {
              this.busy = false;
            });
        }, 300);
      }
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