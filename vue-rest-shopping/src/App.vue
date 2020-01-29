<template>
  <div id="app">
    <Navigation />
    <transition name="page-fade" mode="out-in">
      <router-view />
    </transition>
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
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity .3s ease;
}
.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
