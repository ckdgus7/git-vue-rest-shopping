<template>
<div id="nav">
  <span class="logo">
    <router-link to="/">
    JS Wrap
    </router-link>
  </span>
  <span class="menu">
    <router-link class="nav-link" to="/board/bbs">BBS</router-link> |
    <!-- <router-link class="nav-link" to="/board/notice">Notice</router-link> | -->
    <router-link class="nav-link" to="/memo">Memo (Drag&Drop)</router-link> |
    <router-link class="nav-link" to="/shopping">Shopping List</router-link> |
    <router-link class="nav-link" to="/interest-item">Interest Cart Item (Chart)</router-link>
  </span>
</div>
</template>
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