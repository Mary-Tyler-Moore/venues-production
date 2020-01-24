<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: black'"
			icon="chevron_left"
			label="Back"
			flat />
		<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
      >All Rooms
      </h5>
    <div class="space"></div>
        <div class="column items-center">
          <oak-card/>
            <div class="space"/>
          <river-card/>
            <div class="space"/>
          <magnolia-card/>
            <div class="space"/>
          <kennedyb-card/>
            <div class="space"/>
          <ogeechee-card/>
            <div class="space"/>
          <kennedya-card/>
            <div class="space"/>
          <computer-card/>
            <div class="space"/>
          <classroom-card/>
            <div class="space"/>  
          <atrium-card/>
            <div class="space"/>        
        </div>
 
    <footer />
    </q-page>   
</template>

<script>
import { openURL } from 'quasar'
import Footer from 'components/footer/Footer.vue'

import OakCard from 'components/cards/OakCard.vue'
import RiverCard from 'components/cards/RiverCard.vue'
import MagnoliaCard from 'components/cards/MagnoliaCard.vue'
import KennedybCard from 'components/cards/KennedybCard.vue'
import ComputerCard from 'components/cards/ComputerCard.vue'
import ClassroomCard from 'components/cards/ClassroomCard.vue'
import AtriumCard from 'components/cards/AtriumCard.vue'


	export default {
    components: {
      Footer,
      OakCard,
      RiverCard,
      MagnoliaCard,
      KennedybCard,
      ComputerCard,
      ClassroomCard,
      AtriumCard

    },
    data() {
      return {
        slide: 1,  
        tab: 'one',
        splitterModel: 15
      }
    },
	  methods: {
			venuesBusiness() {
				openURL('http://venuesatotc.com/business_events.html')
			},
			oakRoomVr() {
				openURL('https://vrmap.netlify.com')
			},
		}
	}
</script>
<style lang="scss" scoped>
  .space {
    padding: 2rem;
  }

  .my-card {
  width: 100%;
  max-width: 1000px;
  min-width: 1000px;
  }

  .my-mobile-card {
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  min-height: 600px;
  }
</style>