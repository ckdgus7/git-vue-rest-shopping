import { mapActions } from 'vuex';
import CartModal from '../components/shop/CartModal.vue';
import { formatPrice } from '../utils/index.js';
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
          if( confirm('장바구니를 여시겠습니까?') ) {
            this.FETCH_CART();
            this.$nextTick(() => {
              this.showCartModal = true;
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
