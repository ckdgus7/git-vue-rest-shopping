import { mapGetters, mapActions } from 'vuex';
import BoardTitle from '../components/board/title.vue';
export default {
  components: {
    BoardTitle
  },
  created () {
    if(this.$route.params.bid && !this.GET_BOARD_LIST.list) {
			this.FETCH_BOARD(this.$route.params.bid === 'bbs' ? 1 : 2);
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