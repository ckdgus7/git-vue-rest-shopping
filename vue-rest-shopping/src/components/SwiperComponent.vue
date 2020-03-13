<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <slot name="item"
        v-for="(item, k) in items" 
        :key="`${item.id}_${k}`"
        :imagePath="item.imagePath">
            <swiper-slide>{{ item.imagePath}}</swiper-slide>
        </slot>
        <!-- <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
            }
        }
    },
    props: {
        items: {
            type: Object,
            required: true
        }
    },
    // mounted() {
    //     let opts = {
    //         // Optional parameters
    //         loop: true,

    //         // If we need pagination
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },

    //         // Navigation arrows
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         ...swiperOpt
    //     };
    //     const mySwiper = new Swiper('.swiper-container', opts);
    // },
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper;
    //   }
    // },
    // mounted() {
    //   console.log('this is current swiper instance object', this.swiper);
    //   this.swiper.slideTo(0, 1000, false);
    // }
}
</script>