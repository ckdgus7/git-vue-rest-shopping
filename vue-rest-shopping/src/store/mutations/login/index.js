import { saveUserToCookie, deleteCookie } from '../../../utils/cookies.js';
export default {
  LOGIN (state, username) {
    saveUserToCookie(username);
    state.login.isLogin = true;
    state.login.username = username;
  },
  LOGOUT (state) {
    deleteCookie();
    state.login.isLogin = false;
    state.login.username = '';
  }
}