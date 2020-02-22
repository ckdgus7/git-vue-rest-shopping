export default {
  GET_IS_LOGIN (state) {
    return state.login.isLogin;
  },
  GET_USER_NAME (state) {
    return state.login.username;
  },
  GET_AUTH_TOKEN (state) {
    return state.login.token;
  }
}