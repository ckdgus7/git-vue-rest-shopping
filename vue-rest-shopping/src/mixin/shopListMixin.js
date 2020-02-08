import { mapGetters, mapActions } from 'vuex';

export default {
  created () {
    if(!this.GET_SHOPPING_LIST.list) {
      this.FETCH_SHOPPING({ kword: '' });
    }
  },
  computed: {
    ...mapGetters([
      'GET_SHOPPING_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_SHOPPING'
    ])
  }
}