<template>
<div id="nav">
  <span class="logo">
    최창현 Playground
  </span>
  <span class="menu" v-if="GET_IS_LOGIN">
    <span v-for="(menu) in gnbMenu.LOGIN_AFTER" :key="menu.mkey">
      <router-link class="nav-link" :to="menu.linkUrl">{{ menu.label }}</router-link> |
    </span>
    <a href="https://github.com/ckdgus7/git-vue-rest-shopping" target="_blank" style="color:red;">GitHub</a> |
    <a href="" @click.prevent="procLogout" style="color:red;">LogOut</a>
    <span style="margin-left:50px;">{{ GET_USER_NAME }} 님 로그인중</span>
  </span>
  <span class="menu" v-else>
    <span v-for="(menu) in gnbMenu.LOGIN_PREV" :key="menu.mkey">
      <router-link class="nav-link" :to="menu.linkUrl">{{ menu.label }}</router-link> |
    </span>
  </span>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import gnb from '../data/menu/gnb.js';
export default {
  data () {
    return {
      gnbMenu: gnb
    }
  },
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
#nav .logo {
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