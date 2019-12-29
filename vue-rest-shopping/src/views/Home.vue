<template>
  <div class="home">
    <HomeContent @openAPIList="openModal" @openDevList="openModal" />
    <HomeAPIModal v-if="this.showHomeAPIModal" @closeAPIList="closeModal" />
    <HomeDevModal v-if="this.showHomeDevModal" @closeDevList="closeModal" />
  </div>
</template>

<script>

import HomeContent from '../components/home/HomeContent.vue';
import HomeAPIModal from '../components/home/HomeAPIModal.vue';
import HomeDevModal from '../components/home/HomeDevModal.vue';
export default {
  components : {
    HomeAPIModal,
    HomeContent,
    HomeDevModal
  },
  data () {
    return {
      showHomeAPIModal: false,
      showHomeDevModal: false
    }
  },
  methods: {
    openModal (type) {
      if (type == 'api') this.showHomeAPIModal = true;
      else this.showHomeDevModal = true;
    },
    closeModal (type) {
      if (type == 'api') this.showHomeAPIModal = false;
      else this.showHomeDevModal = false;
    }
  }
}
</script>

<style scoped>
.home {
  margin: 30px;
}
</style>