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
      >{{ $t('carousel.kennedybText') }}
      </h5>

        <!-- Begin Desktop Section -->
        <div class="column items-center" v-if="$q.platform.is.desktop">
        <kennedyb-desktop-card />
        </div>
        <!-- End Desktop Section -->
        
        <!-- Begin Mobile Section-->
        <div class="column items-center" v-if="$q.platform.is.mobile">
        <kennedyb-card />
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
import KennedybCard from "components/cards/mobile/KennedybCard.vue"
import KennedybDesktopCard from "components/cards/desktop/KennedybDesktopCard.vue"
 
	export default {
    components: {
      KennedybCard,
      KennedybDesktopCard,
      
    },
    data() {
      return {  
        slide: 1,
        tab: 'one',
        splitterModel: 15,
      }
    }
  } 

</script>
<style lang="scss" scoped>
  .space {
    padding: 2rem;
  }

</style>