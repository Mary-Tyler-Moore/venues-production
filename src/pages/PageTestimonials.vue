<template>
  <div>
    <q-carousel
      arrows
      animated
      swipeable
      :autoplay="autoplay"
      ref="carousel"
      infinite
      v-model="slide"
      height="96vh"
      width="100wv"
    >
      <q-carousel-slide name="first" img-src="statics/testimonials/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="my-font text-bodyx">"{{ $t('testimonials.testOne') }}
          <br>{{ $t('testimonials.thanks') }}
          </div>
          <div class="text-subtitle1 my-font">Statesboro-Bulloch County Airport</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="statics/testimonials/bg-gallery-3b.jpg">
        <div class="absolute-center custom-caption">
          <div class="my-font text-bodyx">"{{ $t('testimonials.testTwo') }}
          <br>{{ $t('testimonials.thanks') }}
          </div>
          <div class="text-subtitle1 my-font">Spears Family</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="statics/testimonials/bg-gallery-3.jpg">
        <div class="absolute-center custom-caption">
          <div class="my-font text-bodyx">"{{ $t('testimonials.testThree') }} 
          <br>{{ $t('testimonials.thanks') }}
          </div>
          <div class="text-subtitle1 my-font">The Wright and Hagan Families</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth" img-src="statics/testimonials/bg-gallery-4.jpg">
        <div class="absolute-center custom-caption">
          <div class="my-font text-bodyx">"{{ $t('testimonials.testFour') }} 
          <br>{{ $t('testimonials.thanks') }}
          </div>
          <div class="text-subtitle1 my-font">Julie</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fifth" img-src="statics/testimonials/atrium.jpg">
        <div class="absolute-center custom-caption">
          <div class="my-font text-bodyx">"{{ $t('testimonials.testFive') }} 
          <br>{{ $t('testimonials.thanks') }}
          </div>
          <div class="text-subtitle1 my-font">Angie</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      slide: 'first',
      autoplay: false
    }
  }
}
</script>


<style lang="scss" scoped>
.text-bodyx {
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.04125em;
  font-style: italic;
  }

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .59);
  }

@media only screen and (min-width: 1024px) {
  .text-bodyx {
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.01em;
  font-style: italic;
  }
  .custom-caption {
  text-align: center;
  padding-top: 10px;
  width: 75%;
  color: white;
  background-color: rgba(0, 0, 0, .59);
  }
}   

@media only screen and (max-width: 600px) {
  .text-bodyx {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.01em;
  font-style: italic;
  }
  .custom-caption {
  text-align: center;
  padding-top: 10px;
  width: 75%;
  color: white;
  background-color: rgba(0, 0, 0, .59);
  }
} 

@media only screen and (max-width: 360px) {
  .text-bodyx {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 0.01em;
  font-style: italic;
  }
  .custom-caption {
  text-align: center;
  padding-top: 10px;
  width: 75%;
  color: white;
  background-color: rgba(0, 0, 0, .59);
  }
}  
</style>