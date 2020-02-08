import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueLodash from 'vue-lodash';
import infiniteScroll from 'vue-infinite-scroll';

Vue.config.productionTip = false;

Vue.use(VueCarousel);
Vue.use(VueLodash, { name: 'lodash' });
Vue.use(infiniteScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
