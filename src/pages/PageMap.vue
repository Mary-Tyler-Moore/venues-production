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
      >{{ $t('mainMenu.map') }}
  </h5>

   <iframe
      allowfullscreen=""
      frameborder="0"
      height="600px"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.2557832939574!2d-81.81499357290951!3d32.3935797086229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fa410f1677fd3f%3A0x4f8f617e018e528!2sThe%20Venues%20at%20Ogeechee%20Technical%20College!5e1!3m2!1sen!2sus!4v1576353209073!5m2!1sen!2sus"
      style="border:0;"
      title="Google Maps"
      width="100%"
    />
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

	export default {

  } 

</script>
<style lang="scss">

</style>