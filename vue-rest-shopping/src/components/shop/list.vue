<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div id="wrapper">
      <div id="container">
        <ImgCarousel />
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
                    <button type="button" @click.prevent="addCartItem(shopList)" class="btn_cart sct_cart">
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
import { reactive, ref, computed } from '@vue/composition-api';
import { injectStore } from '../../composition_func/common/storeProvider.js';
import { useListFilter } from '../../composition_func/common/listFilter.js';
import { useAddCart } from '../../composition_func/shopping/addCart.js';
import { formatPrice } from '../../utils/index.js';
import ImgCarousel from '../../components/shop/ImgCarousel.vue';
import CartModal from '../../components/shop/CartModal.vue';

export default {
  components: {
    ImgCarousel,
    CartModal
  },
  setup (props, ctx) {
    const { getters, actions } = injectStore();
    const busy = ref(true);
    const state = reactive({
      ls: 0,
      la: 9
    });
    const GET_SHOPPING_LIST = computed( () => getters.GET_SHOPPING_LIST );
    const { searchList } = useListFilter(actions.FETCH_SHOPPING[0], { ls: state.ls, la: state.la }, ctx);
    const { showCartModal, addCartItem, closeCartModal } = useAddCart(ctx, actions);
    const getPirce = (price) => formatPrice(price);
    const loadMore = () => {
      busy.value = true;
      state.la += 9;
      if(state.la <= GET_SHOPPING_LIST.value.total_count) {
        setTimeout(() => {
          const kword = '';
          const ls = state.ls;
          const la = state.la;
          actions.FETCH_SHOPPING[0]({ kword, ls, la })
            .then(() => {
              busy.value = false;
            });
        }, 300);
      }
    };

    actions.FETCH_SHOPPING[0]({ kword: '', ls: state.ls, la: state.la })
      .then(() => {
        busy.value = false;
      }
    );

    return {
      GET_SHOPPING_LIST,
      showCartModal,
      searchList,
      loadMore,
      busy,
      addCartItem,
      closeCartModal,
      getPirce
    }
  }
}
</script>

<style scoped>
#container .shop-content {
  position: relative;
  padding: 9px 55px;
}
</style>