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
ol li {
  margin-left: 30px;
}
</style>
