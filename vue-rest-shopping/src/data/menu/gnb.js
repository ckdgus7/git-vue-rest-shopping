import { deepFreeze } from '../../utils/deepFreeze.js';
const gnb = deepFreeze({
  LOGIN_PREV: [
    {
      linkUrl: '/login',
      label: 'Login',
      mkey: 'login'
    },
    {
      linkUrl: '/login',
      label: 'SignUp',
      mkey: 'signup'
    }
  ],
  LOGIN_AFTER: [
    {
      linkUrl: '/home',
      label: 'HOME',
      mkey: 'home'
    },
    {
      linkUrl: '/board/bbs',
      label: 'BBS',
      mkey: 'bbs'
    },
    {
      linkUrl: '/memo',
      label: 'Memo (Drag&Drop)',
      mkey: 'memo'
    },
    {
      linkUrl: '/shopping',
      label: 'Shopping List',
      mkey: 'shoppinglist'
    },
    {
      linkUrl: '/interest-item',
      label: 'Interest Item',
      mkey: 'interestitem'
    }
  ]
});

export default {
  ...gnb
}