import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
import Shopping from '../views/Shopping.vue'
import Memo from '../views/Memo.vue'
import InterestItem from '../views/InterestItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/board',
    name: 'board',
    component: Board
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
