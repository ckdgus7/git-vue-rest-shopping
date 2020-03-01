<template>
  <div class="shop-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <ImgCarousel />
    <ShopList @openCartModal="openCartModal" />
    <transition name="component-fade" mode="out-in">
      <CartModal v-if="showCartModal" @closeCartLModal="closeCartModal" />
    </transition>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import ShopList from '../components/shop/list.vue';
import ImgCarousel from '../components/shop/ImgCarousel.vue';
import CartModal from '../components/shop/CartModal.vue';

export default {
  components: {
    ShopList,
    ImgCarousel,
    CartModal
  },
  setup () {
    const showCartModal = ref(false);
    const openCartModal = () => showCartModal.value = true;
    const closeCartModel = () => showCartModal.value = false;
    return {
      showCartModal,
      openCartModal,
      closeCartModel
    }
  }
}
</script>