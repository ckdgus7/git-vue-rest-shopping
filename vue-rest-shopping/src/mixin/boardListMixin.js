import { mapGetters, mapActions } from 'vuex';
import BoardTitle from '../components/board/title.vue';
export default {
  components: {
    BoardTitle
  },
  created () {
    if(this.$route.params.bid && !this.GET_BOARD_LIST) {
      const bid = this.$route.params.bid === 'bbs' ? 1 : 2;
			this.FETCH_BOARD({ bid });
		}
  },
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST'
    ])
  },
  methods: {
		...mapActions([
      'FETCH_BOARD'
    ])
  }
}