export default {
  async LOGIN ({ commit }, username) {
    commit('LOGIN', username);
  },
  async LOGOUT ({ commit }) {
    commit('LOGOUT');
  }
}