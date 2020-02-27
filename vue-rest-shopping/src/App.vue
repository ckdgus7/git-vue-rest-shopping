<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import { provideStore } from './composition_func/common/storeProvider.js';
import Navigation from './components/navigation.vue';
export default {
  components: {
    Navigation
  },
  setup (props, { root: { $store }}) {
    provideStore($store);
  }
}
</script>

<style>

ol li {
  margin-left: 30px;
}
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity .3s ease;
}
.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.list-enter-active, .list-leave-active {
  transition: all .7s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
