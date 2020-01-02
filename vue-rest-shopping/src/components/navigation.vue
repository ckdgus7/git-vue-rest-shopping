<template>
<div id="nav">
  <span style="margin: 10px;"><router-link to="/"><img alt="Vue logo" style="width: 30px;" src="../assets/logo.png"></router-link></span>
  <!-- <router-link to="/board">Board</router-link> | -->
  <router-link to="/board/bbs">BBS</router-link> |
  <router-link to="/board/notice">Notice</router-link> |
  <router-link to="/shopping">Shopping</router-link> |
  <router-link to="/memo">Memo</router-link> |
  <router-link to="/interest-item">Shopping</router-link>
</div>
</template>

<script>
export default {

}
</script>

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
</style>