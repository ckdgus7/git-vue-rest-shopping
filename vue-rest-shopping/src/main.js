import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueLodash from 'vue-lodash';
import infiniteScroll from 'vue-infinite-scroll';
import VueCompositionApi from '@vue/composition-api';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(VueLodash, { name: 'lodash' });
Vue.use(VueCarousel);
Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper, {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
