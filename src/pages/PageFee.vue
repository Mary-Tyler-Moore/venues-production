<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: #1e1e1e'"
			icon="chevron_left"
			label="Back"
			flat />

	<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
      >Fee Schedule
      </h5>
    <div class="column items-center" style="height: 75vh;">
    <q-pdfviewer
      style="width: 75%"
      v-model="show"
      type="html5"
      :src="updatedSrc"
      content-class="relative"
    />
    </div>
    <!-- Begin Footer -->
    <div class="text-center" style="padding-top: 0%">
    <h5
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">venues.ogeecheetech.edu</h5>
    <h5
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">912.871.8544 | venues@ogecheetech.edu</h5>
    <h7 
        class="text-italic"
        :style="
        $q.dark.isActive
        ? 'color: white'
        : 'color: black'">Equal Opportunity Institution | A Unit of the Technical College System of Georgia</h7>  
    </div> 
    <!-- End Footer --> 

    </q-page>   
</template>

<script>
export default {
  data () {
    return {
      show: true,
      src: 'statics/pdf/Facility_Rental_Fee_Schedule_2019b.pdf'
    }
  },
  computed: {
    updatedSrc () {
      if (process.env.MODE === 'electron') {
        return '/' + this.src
      }
      return this.src
    }
  }
}
</script>

<style lang="scss" scoped>

</style>