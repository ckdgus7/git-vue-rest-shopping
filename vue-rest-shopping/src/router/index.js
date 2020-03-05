import Vue from 'vue';
import VueRouter from 'vue-router';
import pageLoading from './pageLoading.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'rootpath',
    beforeEnter: (to, from, next) => {
      pageLoading(next, true);
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginForm.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupForm.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid',
    name: 'boardlist',
    component: () => import(/* webpackChunkName: "boardlist" */ '../views/BBS.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/view/:viewid',
    name: 'boardview',
    component: () => import(/* webpackChunkName: "boardview" */ '../views/BBSView.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/write',
    name: 'boardwrite',
    component: () => import(/* webpackChunkName: "boardwrite" */ '../views/BBSWrite.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board/:bid/update/:viewid',
    name: 'boardupdate',
    component: () => import(/* webpackChunkName: "boardupdate" */ '../views/BBSUpdate.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/memo',
    name: 'memo',
    component: () => import(/* webpackChunkName: "memo" */ '../views/Memo.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import(/* webpackChunkName: "shopping" */ '../views/Shopping.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    component: () => import(/* webpackChunkName: "shoppingview" */ '../views/ShoppingView.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/interest-item',
    name: 'interestItem',
    component: () => import(/* webpackChunkName: "interestItem" */ '../views/InterestItem.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '*',
    name: 'notFoundPage',
    component: () => import(/* webpackChunkName: "notFoundPage" */ '../views/NotFoundPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
