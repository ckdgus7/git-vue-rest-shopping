import Vue from 'vue';
import store from '../store/index.js';
import { getUserFromCookie } from '../utils/cookies.js';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);
export default (to, from, next) => {
  const username = getUserFromCookie();
  // const loader = Vue.$loading.show({
  //   container: null,
  //   canCancel: true
  // });
  // setTimeout(() => {
  //   loader.hide();
  // }, 300);
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(username) {
      store.state.login.isLogin = true;
      store.state.login.username = username;
      if(to.name=="rootpath") {
        next('/home');
      } else {
        next();
      }
    } else {
      next('/login');
    }
  } else {
    next();
    return;
  }
}