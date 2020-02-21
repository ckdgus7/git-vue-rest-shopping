<template>
<div id="nav">
  <span class="logo">
    <router-link to="/home">
    JS Wrap
    </router-link>
  </span>
  <span class="menu" v-if="GET_IS_LOGIN">
    <router-link class="nav-link" to="/board/bbs">BBS</router-link> |
    <!-- <router-link class="nav-link" to="/board/notice">Notice</router-link> | -->
    <router-link class="nav-link" to="/memo">Memo (Drag&Drop)</router-link> |
    <router-link class="nav-link" to="/shopping">Shopping List</router-link> |
    <router-link class="nav-link" to="/interest-item">Interest Cart Item (Chart)</router-link> |
    <a href="" @click.prevent="procLogout" style="color:red;">LogOut</a>
    <span style="margin-left:50px;">{{ GET_USER_NAME }} 님 로그인중</span>
  </span>
  <span class="menu" v-else>
    <router-link class="nav-link" to="/login">Login</router-link> |
    <router-link class="nav-link" to="/signup">SignUp</router-link>
  </span>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'GET_IS_LOGIN',
      'GET_USER_NAME'
    ])
  },
  methods: {
    ...mapActions([
      'LOGOUT'
    ]),
    async procLogout () {
      await this.LOGOUT(this.GET_USER_NAME);
      this.$router.replace('/login');
    }
  }
}
</script>
<style scoped>
#nav {
  margin: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav .menu {
  margin-left: 30px;
}
#nav .logo >a {
  padding: 5px; 
  width: 140px; 
  height: 40px; 
  text-align: center;
  background: green; 
  color: white; 
  font-size: 20px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.nav-link.viewed {
  color: #42b983;
}
</style>