<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <transition name="fade">
  <div>
   <swiper :options="swiperOptionh" class="main__swiper">
        <swiper-slide class="h-item">
          <p>
            Horizontal Slide 1
          </p>
        </swiper-slide>
        <swiper-slide class="h-item">
          <swiper :options="swiperOptionv">
            <swiper-slide class="v-item"> 
              <p>
              Vertical Slide 1
              </p>
            </swiper-slide>
            <swiper-slide class="v-item"> 
              <p>
              Vertical Slide 2
              </p>
            </swiper-slide>
            <swiper-slide class="v-item"> 
              <p>
              Vertical Slide 3
              </p>
            </swiper-slide>
            <swiper-slide class="v-item"> 
              <p>
              Vertical Slide 4
              </p>
            </swiper-slide>
            <swiper-slide class="v-item"> 
              <p>
              Vertical Slide 5
              </p>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide class="h-item">
          <p>
            Horizontal Slide 3
          </p>
        </swiper-slide>
        <swiper-slide class="h-item">
          <p>
            Horizontal Slide 4
          </p>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
    
  </transition> 
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
  export default {
    components: { swiper, swiperSlide },
    data () {
      return {
        swiperOptionh: {
          pagination: '.swiper-pagination-h',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: true
        },
        swiperOptionv: {
          pagination: '.swiper-pagination-v',
          paginationClickable: true,
          direction: 'vertical',
          spaceBetween: 20,
          mousewheelControl: true,
          loop: true
        }
      }
    }
  }
</script>
<style type="text/css">
.swiper-container-v {
    background: #eee;
  }
  .main__swiper {
    min-width: 300px;
    max-width: 700px;
    width: 300px;

  }
  .h-item {
    height: 200px;
    background: beige;
  }
  .v-item {
    vertical-align: middle;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }
  p {
    vertical-align: middle;
    display: inline-block;
    padding: 90px 0
  }

</style>
