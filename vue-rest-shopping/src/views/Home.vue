<template>
  <div class="home">
    <HomeContent @openAPIList="openModal" @openDevList="openModal" />
    <HomeAPIModal v-if="this.showHomeAPIModal" @closeAPIList="closeModal" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import HomeContent from '../components/home/HomeContent.vue';
import HomeAPIModal from '../components/home/HomeAPIModal.vue';
export default {
  components : {
    HomeAPIModal,
    HomeContent
  },
  setup () {
    let showHomeAPIModal = ref(false);
    const openModal = () => {
      showHomeAPIModal.value = true;
    }
    const closeModal = () => {
      showHomeAPIModal.value = false;
    }
    return {
      showHomeAPIModal,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
.home {
  margin: 30px;
}
</style>