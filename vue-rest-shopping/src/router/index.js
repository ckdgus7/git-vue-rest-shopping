import Vue from 'vue';
import VueRouter from 'vue-router';
import pageLoading from '@/router/pageLoading.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'rootpath',
    prpos: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    prpos: true,
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginForm.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    prpos: true,
    component: () => import(/* webpackChunkName: "signup" */ '@/views/SignupForm.vue')
  },
  {
    path: '/home',
    name: 'home',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/board',
    name: 'board',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "board" */ '@/views/Board.vue'),
    children: [
      { 
        path: 'bbs', 
        name: 'bbs',
        prpos: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "bbs" */ '@/views/BBS.vue')
      },
      {
        path: 'bbs/view/:viewid',
        name: 'boardview',
        prpos: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "boardview" */ '@/views/BBSView.vue')
      },
      {
        path: 'bbs/write',
        name: 'boardwrite',
        prpos: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "boardwrite" */ '@/views/BBSWrite.vue')
      },
      {
        path: 'bbs/update/:viewid',
        name: 'boardupdate',
        prpos: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "boardupdate" */ '@/views/BBSUpdate.vue')
      }
    ]
  },
  {
    path: '/memo',
    name: 'memo',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "memo" */ '@/views/Memo.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "shopping" */ '@/views/Shopping.vue')
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "shoppingview" */ '@/views/ShoppingView.vue')
  },
  {
    path: '/interest-item',
    name: 'interestitem',
    prpos: true,
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "interestItem" */ '@/views/InterestItem.vue')
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFoundPage',
    component: () => import(/* webpackChunkName: "notFoundPage" */ '@/views/NotFoundPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'ckdgus-restapi-exact-active',
  routes
});

router.beforeEach( (to, from, next) => {
  pageLoading(to, from, next);
});

export default router;
