<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/navigation.vue'
export default {
  components: {
    Navigation,
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
