import Vue from 'vue';
import VueRouter from 'vue-router';
import pageLoading from '@/router/pageLoading.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'rootpath',
    prpos: true,
    beforeEnter: (to, from, next) => {
      pageLoading(next, true);
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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/board',
    name: 'board',
    prpos: true,
    component: () => import(/* webpackChunkName: "board" */ '@/views/Board.vue'),
    // beforeEnter: (to, from, next) => {
    //   pageLoading(next);
    // },
    children: [
      { 
        path: 'bbs', 
        name: 'bbs',
        prpos: true,
        component: () => import(/* webpackChunkName: "bbs" */ '@/views/BBS.vue' ),
        beforeEnter: (to, from, next) => {
          pageLoading(next);
        }
      },
      {
        path: 'bbs/view/:viewid',
        name: 'boardview',
        prpos: true,
        component: () => import(/* webpackChunkName: "boardview" */ '@/views/BBSView.vue'),
        beforeEnter: (to, from, next) => {
          pageLoading(next);
        }
      },
      {
        path: 'bbs/write',
        name: 'boardwrite',
        prpos: true,
        component: () => import(/* webpackChunkName: "boardwrite" */ '@/views/BBSWrite.vue'),
        beforeEnter: (to, from, next) => {
          pageLoading(next);
        }
      },
      {
        path: 'bbs/update/:viewid',
        name: 'boardupdate',
        prpos: true,
        component: () => import(/* webpackChunkName: "boardupdate" */ '@/views/BBSUpdate.vue'),
        beforeEnter: (to, from, next) => {
          pageLoading(next);
        }
      }
    ]
  },
  // {
  //   path: '/board/bbs',
  //   name: 'bbs',
  //   prpos: true,
  //   component: () => import(/* webpackChunkName: "bbs" */ '@/views/BBS.vue'),
  //   beforeEnter: (to, from, next) => {
  //     pageLoading(next);
  //   }
  // },
  // {
  //   path: '/board/bbs/view/:viewid',
  //   name: 'boardview',
  //   prpos: true,
  //   component: () => import(/* webpackChunkName: "boardview" */ '@/views/BBSView.vue'),
  //   beforeEnter: (to, from, next) => {
  //     pageLoading(next);
  //   }
  // },
  // {
  //   path: '/board/bbs/write',
  //   name: 'boardwrite',
  //   prpos: true,
  //   component: () => import(/* webpackChunkName: "boardwrite" */ '@/views/BBSWrite.vue'),
  //   beforeEnter: (to, from, next) => {
  //     pageLoading(next);
  //   }
  // },
  // {
  //   path: '/board/bbs/update/:viewid',
  //   name: 'boardupdate',
  //   prpos: true,
  //   component: () => import(/* webpackChunkName: "boardupdate" */ '@/views/BBSUpdate.vue'),
  //   beforeEnter: (to, from, next) => {
  //     pageLoading(next);
  //   }
  // },
  {
    path: '/memo',
    name: 'memo',
    prpos: true,
    component: () => import(/* webpackChunkName: "memo" */ '@/views/Memo.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping',
    name: 'shopping',
    prpos: true,
    component: () => import(/* webpackChunkName: "shopping" */ '@/views/Shopping.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/shopping/view/:viewid',
    name: 'shoppingview',
    prpos: true,
    component: () => import(/* webpackChunkName: "shoppingview" */ '@/views/ShoppingView.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
  },
  {
    path: '/interest-item',
    name: 'interestitem',
    prpos: true,
    component: () => import(/* webpackChunkName: "interestItem" */ '@/views/InterestItem.vue'),
    beforeEnter: (to, from, next) => {
      pageLoading(next);
    }
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

export default router;
