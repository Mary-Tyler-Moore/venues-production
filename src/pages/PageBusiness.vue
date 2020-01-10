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
        <!-- Begin Desktop Section -->
        <div class="column items-center" v-if="$q.platform.is.desktop">
          
          <oak-desktop-card/>
            <div class="space"/>

          <river-desktop-card/>
            <div class="space"/>

          <magnolia-desktop-card/>
            <div class="space"/>
            
          <kennedyb-desktop-card/>
            <div class="space"/>
          
          <ogeechee-desktop-card/>
            <div class="space"/>
          
          <kennedya-desktop-card/>
            <div class="space"/>
          
          <computer-desktop-card/>
            <div class="space"/>

          <classroom-desktop-card/>
            <div class="space"/>

          <atrium-desktop-card/>
            <div class="space"/>

        </div>
        <!-- End Desktop Section -->
        <!-- Begin Mobile Section-->
        <div class="column items-center" v-if="$q.platform.is.mobile">
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
    <!-- Begin Footer -->
     <div class="text-center" style="padding-top: 5%">
    <div class="text-h5"
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">venues.ogeecheetech.edu</div>
    <div class="text-h5"
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">912.871.8544 | venues@ogecheetech.edu</div>
    <div class="text-h7 text-italic" 
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">Equal Opportunity Institution | A Unit of the Technical College System of Georgia</div>  
    </div>  
    
    <!-- End Footer --> 
    </q-page>   
</template>

<script>
import { openURL } from 'quasar'
import OakDesktopCard from 'components/cards/desktop/OakDesktopCard.vue'
import RiverDesktopCard from 'components/cards/desktop/RiverDesktopCard.vue'
import MagnoliaDesktopCard from 'components/cards/desktop/MagnoliaDesktopCard.vue'
import KennedybDesktopCard from 'components/cards/desktop/KennedybDesktopCard.vue'
import OgeecheeDesktopCard from 'components/cards/desktop/OgeecheeDesktopCard.vue'
import KennedyaDesktopCard from 'components/cards/desktop/KennedyaDesktopCard.vue'
import ComputerDesktopCard from 'components/cards/desktop/ComputerDesktopCard.vue'
import ClassroomDesktopCard from 'components/cards/desktop/ClassroomDesktopCard.vue'
import AtriumDesktopCard from 'components/cards/desktop/AtriumDesktopCard.vue'

import OakCard from 'components/cards/mobile/OakCard.vue'
import RiverCard from 'components/cards/mobile/RiverCard.vue'
import MagnoliaCard from 'components/cards/mobile/MagnoliaCard.vue'
import KennedybCard from 'components/cards/mobile/KennedybCard.vue'
import KennedyaCard from 'components/cards/mobile/KennedyaCard.vue'
import ComputerCard from 'components/cards/mobile/ComputerCard.vue'
import ClassroomCard from 'components/cards/mobile/ClassroomCard.vue'
import AtriumCard from 'components/cards/mobile/AtriumCard.vue'
import OgeecheeCard from 'components/cards/mobile/OgeecheeCard.vue'


	export default {
    components: {
      OakDesktopCard,
      RiverDesktopCard,
      MagnoliaDesktopCard,
      KennedybDesktopCard,
      OgeecheeDesktopCard,
      KennedyaDesktopCard,
      ComputerDesktopCard,
      ClassroomDesktopCard,
      AtriumDesktopCard,
      OakCard,
      RiverCard,
      MagnoliaCard,
      KennedybCard,
      KennedyaCard,
      ComputerCard,
      ClassroomCard,
      AtriumCard,
      OgeecheeCard


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