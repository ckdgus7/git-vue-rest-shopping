import { mapActions } from 'vuex';
import { formatPrice } from '../utils/index.js';
import CartModal from '../components/shop/CartModal.vue';
export default {
  components: {
    CartModal
  },
  data () {
    return {
      showCartModal: false
    }
  },
  methods: {
    ...mapActions([
      'INSERT_CART',
      'FETCH_CART'
    ]),
    openCartModal ({it_id, it_name, it_price, it_img}) {
      this.INSERT_CART({it_id, it_name, it_price, it_img})
        .then(() => {
          if( confirm(`${it_name} 제품을 장바구니에 담았습니다.\n장바구니를 여시겠습니까?`) ) {
            this.FETCH_CART();
            this.$nextTick(() => {
              setTimeout(() => {
                this.showCartModal = true;
              }, 500);
            });
          }
        });
    },
    closeCartModal () {
      this.showCartModal = false;
    },
    getPirce (price) {
      return formatPrice(price);
    }
  }
}
