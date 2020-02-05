import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
