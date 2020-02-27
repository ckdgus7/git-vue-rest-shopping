<template>
<div id="nav">
  <span class="logo">
    최창현 Playground
  </span>
  <span class="menu" v-if="GET_IS_LOGIN">
    <span v-for="(menu) in gnbMenu.LOGIN_AFTER" :key="menu.mkey">
      <router-link class="nav-link" :to="menu.linkUrl">{{ menu.label }}</router-link> |
    </span>
    <a :href="gitLink" target="_blank" style="color:red;">GitHub</a> |
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
import { reactive, computed } from '@vue/composition-api';
import { injectStore } from '../composition_func/common/storeProvider.js';
import gnb from '../data/menu/gnb.js';
export default {
  setup (props, { root: { $router } }) {
    const { getters, actions } = injectStore();
    const state = reactive({
      gnbMenu: gnb,
      gitLink: process.env.VUE_APP_GITHUB_URL
    });
    const GET_IS_LOGIN = computed( () => {
      return getters.GET_IS_LOGIN;
    });
    const GET_USER_NAME = computed( () => {
      return getters.GET_USER_NAME;
    });
    const procLogout = async () => {
      await actions.LOGOUT[0](GET_USER_NAME);
      $router.replace('/login');
    }
    return {
      GET_IS_LOGIN,
      GET_USER_NAME,
      procLogout,
      gnbMenu: state.gnbMenu,
      gitLink: state.gitLink
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