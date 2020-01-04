import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST'
    ])
  }
}