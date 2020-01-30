import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'
import Home from '../views/Home.vue';
import BBS from '../views/BBS.vue';
import BBSView from '../views/BBSView.vue';
import BBSWrite from '../views/BBSWrite.vue';
import BBSUpdate from '../views/BBSUpdate.vue';
import Shopping from '../views/Shopping.vue';
import ShoppingView from '../views/ShoppingView.vue';
import Memo from '../views/Memo.vue';
import InterestItem from '../views/InterestItem.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueRouter);
Vue.use(Loading);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      if(to.path.indexOf('bbs') > -1) {
        store.state.boardNum = 1;
      } else {
        store.state.boardNum = 2;
      }
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/board/:bid',
    name: 'boardlist',
    component: BBS,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/board/:bid/view/:viewid',
    name: 'boardview',
    component: BBSView,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/board/:bid/write',
    name: 'boardwrite',
    component: BBSWrite,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/board/:bid/update/:viewid',
    name: 'boardupdate',
    component: BBSUpdate,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/memo',
    name: 'memo',
    component: Memo,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    component: ShoppingView,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  },
  {
    path: '/interest-item',
    name: 'interestItem',
    component: InterestItem,
    beforeEnter: (to, from, next) => {
      let loader = Vue.$loading.show({
        container: null,
        canCancel: true
      });
      next();
      setTimeout(() => {
        loader.hide();
      }, 300);
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
