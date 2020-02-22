import Vue from 'vue';
import store from '../store/index.js';
import { getUserFromCookie } from '../utils/cookies.js';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);
export default (next, isHome=false) => {
  const loader = Vue.$loading.show({
    container: null,
    canCancel: true
  });
  const username = getUserFromCookie();
  setTimeout(() => {
    loader.hide();
  }, 300);
  if(username) {
    if(isHome) {
      store.state.login.isLogin = true;
      store.state.login.username = username;
      next('/home');
    } else {
      next();
    }
  } else {
    next('/login');
  }
}