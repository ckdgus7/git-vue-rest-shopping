<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide 
        v-for="(item, k) in items" 
        :key="`${item.id}_${k}`">
            <img :src="item.imagePath" />
        </swiper-slide>
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
                },
                items: [
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
                ]
            }
        }
    }
</script>