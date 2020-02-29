<template>
  <carousel :data="carouselData"></carousel>
</template>

<script>
  export default {
    data() {
      return {
        carouselData: [
          '<div class="example-slide"><img style="width: 100%; height: 300px;" src="https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w="></div>',
          '<div class="example-slide"><img src="https://cdn.pixabay.com/photo/2018/05/17/16/03/compass-3408928_960_720.jpg" style="width: 100%; height: 300px;"></div>',
          '<div class="example-slide"><img style="width: 100%; height: 300px;" src="https://media.istockphoto.com/photos/blank-banner-picture-id482858783?k=6&m=482858783&s=612x612&w=0&h=LKLlv3FN_ELjarwZ6xffQAPo_KFGmDG-2DGDzknET8w="></div>',
        ],
      };
    },
  };
</script>

<style scoped>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>