<template>
	<swiper :options="swiperOption" ref="mySwiper">

		<!-- slides -->
		<swiper-slide 
		v-for="(slide, k) in swiperSlides" 
		:key="`${slide.id}_${k}`">
			<slot name="slide-conntent" :slideData="slide"></slot>
		</swiper-slide>

		<!-- Optional controls -->
		<div class="swiper-pagination"  slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<div class="swiper-scrollbar"   slot="scrollbar"></div>

	</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		name: 'carrousel',
		props: {
			swiperSlides: {
				type: Array,
				require: true
			},
			sOptions: {
				type: Object
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					scrollbar: {
						el: '.swiper-scrollbar',
						hide: true
					},
					...this.sOptions
				}
			}
		}
	}
</script>