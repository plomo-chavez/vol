<swiper-slide><img decoding="async" src=""></swiper-slide>
<template>
  <div class="slider-container">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slider image">
      </div>
    </div>
    <button class="btn-left" @click="prevSlide">Anterior</button>
    <button class="btn-right" @click="nextSlide">Siguiente</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      images: [
        'https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg" width="555" height="300" title="Bombastic fuzzy numbly precise ape ..." alt="Bombastic fuzzy numbly precise ape ..." srcset="https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg 1x , https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-1110x600.jpg 2x',
        'https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg" width="555" height="300" title="Bombastic fuzzy numbly precise ape ..." alt="Bombastic fuzzy numbly precise ape ..." srcset="https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg 1x , https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-1110x600.jpg 2x',
        'https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg" width="555" height="300" title="Bombastic fuzzy numbly precise ape ..." alt="Bombastic fuzzy numbly precise ape ..." srcset="https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-555x300.jpg 1x , https://demo.dawnthemes.com/ticketbox/wp-content/uploads/2017/03/pexels-photo-29021-1110x600.jpg 2x',
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide + this.images.length - 1) % this.images.length;
    }
  }
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  display: block;
}

.btn-left, .btn-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;
}

.btn-left {
  left: 10px;
}

.btn-right {
  right: 10px;
}
</style>
