<template>
  <div>
    <home-carousel></home-carousel>
    <home-info></home-info>
  </div>
</template>

<style>

</style>

<script>
import HomeCarousel from "components/carousel/HomeCarousel.vue"
import HomeInfo from "components/carousel/HomeInfo.vue"
export default {
  components: {
    HomeCarousel,
    HomeInfo
  },
  name: 'PageIndex',
  methods: {
    getStyle() {
      return { color: "white" };
    }
  }
};
</script>
