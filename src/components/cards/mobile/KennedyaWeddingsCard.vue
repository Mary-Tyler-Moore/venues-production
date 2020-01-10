<template>
    <q-card 
          class="my-mobile-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'"
          >

          <div class="q-pa-md">
             <q-carousel
               animated
               v-model="slide"
               arrows
               navigation
               infinite
             >
               <q-carousel-slide :name="1" img-src="statics/kennedya/wedding/bg-gallery-1.jpg" />
               <q-carousel-slide :name="2" img-src="statics/kennedya/wedding/bg-gallery-2.jpg" />
               <q-carousel-slide :name="3" img-src="statics/kennedya/wedding/bg-gallery-3.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">{{ $t('mainMenu.kennedyAuditorium') }}</div>
			      <q-card-actions align="right" style="padding-top: 5%">
              <q-btn glossy color="pink" class="button-2" icon="360" v-bind:label="$t('mainMenu.buttonVr')" @click="kennedyA()" />
            </q-card-actions>
          </q-card-section>
		  <q-tabs 
            v-model="tab" 
            :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'">
          <q-tab v-bind:label="$t('cards.labelOverview')" name="one" />
          <q-tab v-bind:label="$t('cards.labelFeeSchedule')" name="two" />
          <q-tab v-bind:label="$t('cards.labelFeeIncludes')" name="four" />
          <q-tab v-bind:label="$t('cards.labelCapacity')" name="five" />
          </q-tabs>

      <q-separator />

      <q-tab-panels 
        v-model="tab" 
        animated
        :style="
          $q.dark.isActive
            ? 'background: #666666'
            : 'background: white'"
            >
        <q-tab-panel name="one">
          {{ $t('cards.kennedyAuditoriumText') }}
        </q-tab-panel>
        <q-tab-panel name="two">
          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>{{ $t('cards.weekDaySchedule') }}</strong><br><br>    
              <strong>{{ $t('cards.halfDayRental') }}</strong><br>
              ({{ $t('cards.fourHours') }})<br>
               $300<br>
               {{ $t('cards.additionalHour') }}: $75.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong><br>
              ({{ $t('cards.eightHours') }})<br>
               $450<br>
               {{ $t('cards.additionalHour') }}: $75.00<br><br>
              </div>
            </div>
            <div class="<column items-center text-center">
              
              <div class="col-3" style="padding-bottom: 5%"> 
              <strong>{{ $t('cards.weekEndSchedule') }}</strong><br><br>       
              <strong>{{ $t('cards.halfDayRental') }}</strong><br>
              ({{ $t('cards.fourHours') }})<br>
               $500<br>
               {{ $t('cards.additionalHour') }}: $75.00<br>
              </div>
            
              <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong><br>
              ({{ $t('cards.eightHours') }})<br>
               $750<br>
               {{ $t('cards.additionalHour') }}: $125.00<br>
              </div>
            </div>
          </div>  
        </q-tab-panel>
        <q-tab-panel name="four">
          {{ $t('cards.atriumFeeIncludesOne') }}<br>
          {{ $t('cards.atriumFeeIncludesTwo') }}<br>
          {{ $t('cards.atriumFeeIncludesThree') }}<br>
          {{ $t('cards.atriumFeeIncludesFour') }}<br>
        </q-tab-panel>
        <q-tab-panel name ="five">
          {{ $t('cards.riverCapacityStanding') }}<strong>500</strong><br>
          {{ $t('cards.riverCapacitySeated') }}<strong>280</strong><br>
        </q-tab-panel>   

        <q-tab-panel name="three">
          {{ $t('cards.oakEnhancedPackageOne') }}<br>
          {{ $t('cards.oakEnhancedPackageTwo') }}<br>
          {{ $t('cards.oakEnhancedPackageThree') }}
        </q-tab-panel>
      </q-tab-panels>
    </q-card>    
</template>

<script>
import { openURL } from 'quasar'
export default { 
  data() {
    return {
        slide: 1,  
        tab: 'one',
    }
  },
    methods: {
    kennedyA() {
      openURL('https://www.venuesatotc.com/tour/#Kennedy_Auditorium')
    }
  }    
}
</script>

<style lang="scss" scoped>
  .my-mobile-card {
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  min-height: 600px;
  }
</style>