import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'
import Home from '../views/Home.vue';
import BBS from '../views/BBS.vue';
import BBSView from '../views/BBSView.vue';
import BBSWrite from '../views/BBSWrite.vue';
import BBSUpdate from '../views/BBSUpdate.vue';
import Shopping from '../views/Shopping.vue';
import Memo from '../views/Memo.vue';
import InterestItem from '../views/InterestItem.vue';

Vue.use(VueRouter);

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
      if(to.path.indexOf('bbs') > -1) {
        store.state.boardNum = 1;
      } else {
        store.state.boardNum = 2;
      }
      next();
    }
  },
  {
    path: '/board/:bid',
    name: 'boardlist',
    component: BBS
  },
  {
    path: '/board/:bid/view/:viewid',
    name: 'boardview',
    component: BBSView
  },
  {
    path: '/board/:bid/write',
    name: 'boardwrite',
    component: BBSWrite
  },
  {
    path: '/board/:bid/update/:viewid',
    name: 'boardupdate',
    component: BBSUpdate
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping,
    // beforeEnter: (to, from, next) => {
    //   if(to.path.indexOf('bbs') > -1) {
    //     store.state.boardNum = 1;
    //   } else {
    //     store.state.boardNum = 2;
    //   }
    //   next();
    // }
  },
  {
    path: '/memo',
    name: 'memo',
    component: Memo
  },
  {
    path: '/interest-item',
    name: 'interestItem',
    component: InterestItem
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
