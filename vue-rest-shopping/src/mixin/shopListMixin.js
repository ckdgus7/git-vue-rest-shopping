import { mapGetters, mapActions } from 'vuex';

export default {
  created () {
    if(!this.GET_SHOPPING_LIST.list) {
      const kword = '';
      const ls = this.ls;
      const la = this.la;
      this.FETCH_SHOPPING({ kword, ls, la })
        .then(() => {
          this.busy = false;
        });
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