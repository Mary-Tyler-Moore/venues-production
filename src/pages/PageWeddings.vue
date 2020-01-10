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
      >{{ $t('mainMenu.weddings') }}
      </h5>
      
    <div class="space"></div>
        <!-- Begin Desktop Section -->
        <div class="column items-center" v-if="$q.platform.is.desktop">

        <!-- Desktop Card 1 -->  
        <oak-weddings-desktop-card></oak-weddings-desktop-card>
         <!-- End Desktop Card 1 -->

        <div class="space"></div>

        <kennedya-desktop-card />

        <!-- Begin Desktop Card 3 -->    
        <div class="space"></div>

        <atrium-desktop-card />
        <!-- End Desktop Card 3 -->

        <div class="space"></div>

        </div>
        <!-- End Desktop Section -->


        <!-- Begin Mobile Section-->
        <div class="column items-center" v-if="$q.platform.is.mobile">

        <!-- Mobile Card 1 -->
      
        <oak-weddings-card></oak-weddings-card>

        <!-- End Mobile Card 1 -->

        <div class="space" />

        <!-- Begin Mobile Card 2 -->
        <kennedya-weddings-card></kennedya-weddings-card>
        <!-- End Mobile Card 2 -->

        <div class="space" />

        <!-- Begin Mobile Card 3 -->
        <atrium-card></atrium-card>
        <!-- End Mobile Card 3 -->

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
import OakWeddingsCard from "components/cards/mobile/OakWeddingsCard.vue"
import KennedyaWeddingsCard from "components/cards/mobile/KennedyaWeddingsCard.vue"
import AtriumCard from "components/cards/mobile/AtriumCard.vue"
import OakWeddingsDesktopCard from "components/cards/desktop/OakWeddingsDesktopCard.vue"
import KennedyaDesktopCard from "components/cards/desktop/KennedyaDesktopCard.vue"
import AtriumDesktopCard from "components/cards/desktop/AtriumDesktopCard.vue"
    
	export default {
    components: {
      OakWeddingsCard,
      KennedyaWeddingsCard,
      AtriumCard,
      OakWeddingsDesktopCard,
      KennedyaDesktopCard,
      AtriumDesktopCard
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