<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" value="test@test.com" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="password" value="1111" v-model="password" />
          <p class="validation-text">
            <!-- <span class="warning" v-if="!isPasswordValid && password">
              Please enter an email address
            </span> -->
          </p>
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <!-- <p class="log">{{ logMessage }}</p> -->
    </div>
    <SwiperView :swiperSlides="swiperSlides" :sOptions="sOptions">
      <template #slide-conntent="{ slideData }">
        <!-- swiper-slide 내부 콘텐츠 설정 -->
        <img class="slide-img" :src="slideData.imagePath" />
        <!-- swiper-slide 내부 콘텐츠 설정 -->
      </template>
    </SwiperView>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { validateEmail } from '../utils/index.js';
import { getUserFromCookie } from '../utils/cookies.js';
const SwiperView = () => import(/* webpackChunkName: "SwiperView" */ '../components/SwiperView.vue');
export default {
  components: {
    SwiperView
  },
  data () {
    return {
      sOptions: {
        loop: false
      },
      swiperSlides: [
          {
              id: 1,
              imagePath: 'https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w='
          },
          {
              id: 2,
              imagePath: 'https://cdn.pixabay.com/photo/2018/05/17/16/03/compass-3408928_960_720.jpg'
          },
          {
              id: 3,
              imagePath: 'https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w='
          }
      ],
      username: 'test@test.com',
      password: '1111',
      logMessage: '',
    };
  },
  created () {
    const username = getUserFromCookie();
    if(username) {
      this.$router.replace('/home');
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    async submitForm() {
      try {
        await this.LOGIN(this.username);
        this.$router.push('/home');
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.username = '';
        this.password = '';
      }
    }
  }
};
</script>

<style scoped>
.slide-img {
	width: 100%;
}
.form-container {
  display: flex;
  align-items: center;
}
.form-wrapper {
  background: white;
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 15px 15px;
}
.form-wrapper.form-wrapper-sm {
  max-width: 500px;
  margin: 40px auto;
}
.form-wrapper-sm .page-header {
  padding: 0px 0 20px;
}
.form label {
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
  color: #364f6b;
  font-size: 90%;
}
.form input,
.form textarea {
  font-family: inherit;
  font-size: 100%;
  width: 100%;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}
.form input.valid {
  border: 1px solid #21b314;
}
.form input.invalid {
  border: 1px solid red;
}
.form div:nth-last-child(2) {
  margin-bottom: 0.5rem;
}
.btn {
  background: #FE9616;
  /* padding: 10px; */
  font-weight: 700;
  border-radius: .25rem;
  border: 0 solid #dae1e7;
}
.btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.log {
  color: #ff4057;
  font-size: 1rem;
  text-align: center;
}
.warning {
  color: #ff4057;
}
.btn {
	color: white;
}
.page-header {
	font-size: 45px;
	font-weight: 600;
	color: #456155;
	padding: 30px 5px 15px;
}
</style>
