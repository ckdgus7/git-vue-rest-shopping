import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    if(!this.GET_BOARD_LIST.list) {
			this.FETCH_BOARD(this.$route.params.bid === 'bbs' ? 1 : 2);
		}
  },
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST',
      'GET_BOARD'
    ])
  },
  methods: {
		...mapActions([
      'FETCH_BOARD'
    ])
  }
}