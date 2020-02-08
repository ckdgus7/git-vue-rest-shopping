<template>
<div id="nav">
  <span style="margin: 10px;">
    <router-link to="/">
    <img alt="Vue logo" style="width: 30px;" src="../assets/logo.png">
    </router-link>
  </span>
  <router-link class="nav-link" to="/board/bbs">BBS</router-link> |
  <!-- <router-link class="nav-link" to="/board/notice">Notice</router-link> | -->
  <router-link class="nav-link" to="/memo">Memo (Drag&Drop)</router-link> |
  <router-link class="nav-link" to="/shopping">Shopping List</router-link> |
  <router-link class="nav-link" to="/interest-item">Interest Cart Item (Chart)</router-link>
</div>
</template>
<style scoped>
#nav {
  padding: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.nav-link.viewed {
  color: #42b983;
}
</style>