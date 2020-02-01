import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);
export default (next) => {
  let loader = Vue.$loading.show({
    container: null,
    canCancel: true
  });
  setTimeout(() => {
    loader.hide();
  }, 300);
  next();
}