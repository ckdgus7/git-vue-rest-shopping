import Vue from 'vue';
import VueRouter from 'vue-router';
import pageLoading from '@/router/pageLoading.js';

Vue.use(VueRouter);

const routePages = {
  login: () => import(/* webpackChunkName: "login" */ '@/views/LoginForm.vue'),
  signup: () => import(/* webpackChunkName: "signup" */ '@/views/SignupForm.vue'),
  home: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  board: () => import(/* webpackChunkName: "board" */ '@/views/Board.vue'),
  bbs: () => import(/* webpackChunkName: "bbs" */ '@/views/BBS.vue'),
  boardview: () => import(/* webpackChunkName: "boardview" */ '@/views/BBSView.vue'),
  boardwrite: () => import(/* webpackChunkName: "boardwrite" */ '@/views/BBSWrite.vue'),
  boardupdate: () => import(/* webpackChunkName: "boardupdate" */ '@/views/BBSUpdate.vue'),
  memo: () => import(/* webpackChunkName: "memo" */ '@/views/Memo.vue'),
  shopping: () => import(/* webpackChunkName: "shopping" */ '@/views/Shopping.vue'),
  shoppingview: () => import(/* webpackChunkName: "shoppingview" */ '@/views/ShoppingView.vue'),
  interestitem: () => import(/* webpackChunkName: "interestitem" */ '@/views/InterestItem.vue'),
  notFoundPage: () => import(/* webpackChunkName: "notFoundPage" */ '@/views/NotFoundPage.vue'),
}
const routes = [
  {
    path: '/',
    name: 'rootpath',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    props: true,
    component: routePages.login
  },
  {
    path: '/signup',
    name: 'signup',
    component: routePages.signup
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      requiresAuth: true
    },
    component: routePages.home
  },
  {
    path: '/board',
    name: 'board',
    meta: {
      requiresAuth: true
    },
    component: routePages.board,
    children: [
      { 
        path: 'bbs', 
        name: 'bbs',
        props: (route) => {
          return route.query.s || '';
        },
        meta: {
          requiresAuth: true
        },
        component: routePages.bbs
      },
      {
        path: 'bbs/view/:viewid',
        name: 'boardview',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: routePages.boardview
      },
      {
        path: 'bbs/write',
        name: 'boardwrite',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: routePages.boardwrite
      },
      {
        path: 'bbs/update/:viewid',
        name: 'boardupdate',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: routePages.boardupdate
      }
    ]
  },
  {
    path: '/memo',
    name: 'memo',
    meta: {
      requiresAuth: true
    },
    component: routePages.memo
  },
  {
    path: '/shopping',
    name: 'shopping',
    props: true,
    meta: {
      requiresAuth: true
    },
    component: routePages.shopping
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    props: true,
    meta: {
      requiresAuth: true
    },
    component: routePages.shoppingview
  },
  {
    path: '/interest-item',
    name: 'interestitem',
    meta: {
      requiresAuth: true
    },
    component: routePages.interestitem
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFoundPage',
    component: routePages.notFoundPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // linkExactActiveClass: 'ckdgus-restapi-nav-link-exact-active',
  routes
});

router.beforeEach( (to, from, next) => {
  pageLoading(to, from, next);
});

export default router;
