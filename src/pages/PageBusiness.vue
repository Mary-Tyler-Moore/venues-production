<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: #1e1e1e'"
			icon="chevron_left"
			v-bind:label="$t('mainMenu.back')"
			flat />
		<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
      >{{ $t('mainMenu.business') }}
      </h5>
    <div class="space"></div>
        <!-- Begin card Section-->
        <div class="column items-center" >
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
        <!-- End Mobile Section -->
    <footer />
    </q-page>   
</template>

<script>
import { openURL } from 'quasar'

import OakCard from 'components/cards/OakCard.vue'
import RiverCard from 'components/cards/RiverCard.vue'
import MagnoliaCard from 'components/cards/MagnoliaCard.vue'
import KennedybCard from 'components/cards/KennedybCard.vue'
import KennedyaCard from 'components/cards/KennedyaCard.vue'
import ComputerCard from 'components/cards/ComputerCard.vue'
import ClassroomCard from 'components/cards/ClassroomCard.vue'
import AtriumCard from 'components/cards/AtriumCard.vue'
import OgeecheeCard from 'components/cards/OgeecheeCard.vue'
import Footer from 'components/footer/Footer.vue'


	export default {
    components: {
      OakCard,
      RiverCard,
      MagnoliaCard,
      KennedybCard,
      KennedyaCard,
      ComputerCard,
      ClassroomCard,
      AtriumCard,
      OgeecheeCard,
      Footer


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
</style>