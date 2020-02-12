import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import pageLoading from '../mixin/routerMixin.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'rootpath',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if(to.path.indexOf('bbs') > -1) {
        store.state.boardNum = 1;
      } else {
        store.state.boardNum = 2;
      }
      pageLoading(next);
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginForm.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupForm.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid',
    name: 'boardlist',
    component: () => import('../views/BBS.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/view/:viewid',
    name: 'boardview',
    component: () => import('../views/BBSView.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/write',
    name: 'boardwrite',
    component: () => import('../views/BBSWrite.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/update/:viewid',
    name: 'boardupdate',
    component: () => import('../views/BBSUpdate.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/memo',
    name: 'memo',
    component: () => import('../views/Memo.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/Shopping.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    component: () => import('../views/ShoppingView.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/interest-item',
    name: 'interestItem',
    component: () => import('../views/InterestItem.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '*',
    name: 'notFoundPage',
    component: () => import('../views/NotFoundPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
