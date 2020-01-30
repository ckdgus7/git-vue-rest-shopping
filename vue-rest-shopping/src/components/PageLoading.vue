<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" 
    :can-cancel="true" 
    :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    Loading
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
</script>