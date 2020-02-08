import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueLodash from 'vue-lodash';

Vue.config.productionTip = false;

Vue.use(VueCarousel);
Vue.use(VueLodash, { name: 'lodash' });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
