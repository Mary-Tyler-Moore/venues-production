<template>
    <q-card 
          class="my-card"
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
               <q-carousel-slide :name="1" img-src="statics/ogeechee/bg-gallery-1.jpg" />
               <q-carousel-slide :name="2" img-src="statics/ogeechee/bg-gallery-2.jpg" />
               <q-carousel-slide :name="3" img-src="statics/ogeechee/bg-gallery-3.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">{{ $t('mainMenu.ogeecheeBoardroom') }}</div>
            <div class="text-subtitle2" style="padding-bottom: 5%">{{ $t('cards.ogeecheeText') }}
            </div>
          
           <div class="column items-center text-center">          
           <q-splitter
             v-model="splitterModel"
             style="width: 100%"
           >

           <template v-slot:before>
             <q-tabs
               v-model="tab"
               vertical
               :style="
                 $q.dark.isActive
                   ? 'color: white'
                   : 'color: teal'"
             >
               <q-tab name="one" icon="today" v-bind:label="$t('cards.labelFeeSchedule')" />
               <q-tab name="alarms" icon="monetization_on" v-bind:label="$t('cards.labelFeeIncludes')" />
               <q-tab name="movies" icon="people_alt" v-bind:label="$t('cards.labelCapacity')" />
             </q-tabs>
           </template>

           <template v-slot:after>
             <q-tab-panels
               v-model="tab"
               animated
               transition-prev="jump-up"
               transition-next="jump-up"
             > 
               <q-tab-panel 
                 name="one"
                 :style="
                     $q.dark.isActive
                       ? 'background: #666666'
                       : 'background: white'">
               <div class="column items-center text-center">
                 <div 
                   class="row justify-around" 
                   style="padding-bottom: 2%">   
                 <div 
                   class="text-h6 col-5"
                     >{{ $t('cards.weekDaySchedule') }}</div>
                 <!--    
                 <div 
                   class="text-h6 col-5"
                   style="margin-right: -19%"
                     >{{ $t('cards.weekEndSchedule') }}</div>
                 -->    
                 </div>  
               </div>

          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>{{ $t('cards.halfDayRental') }}</strong><br>
              {{ $t('cards.fourHours') }}<br>
               $150<br>
               {{ $t('cards.additionalHour') }}: $40.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong><br>
              ({{ $t('cards.eightHours') }})<br>
               $250<br>
               {{ $t('cards.additionalHour') }}: $40<br>
              </div>
            </div>
            <!--
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>{{ $t('cards.halfDayRental') }}</strong><br>
              ({{ $t('cards.fourHours') }})<br>
               $1,650<br>
               {{ $t('cards.additionalHour') }}: $300.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong><br>
              ({{ $t('cards.eightHours') }})<br>
               $2,250<br>
               {{ $t('cards.additionalHour') }}<br>
              </div>
            </div>
            -->
          </div>  
        </q-tab-panel>   

          <q-tab-panel 
            name="alarms"
            style="height: 220px"
            :style="
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                  >
            <div class="text-h4 q-mb-md">{{ $t('cards.labelFeeIncludes') }}</div>
              {{ $t('cards.ogeecheeFeeIncludesOne') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesTwo') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesThree') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesFour') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesFive') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesSix') }}<br>
              {{ $t('cards.ogeecheeFeeIncludesSeven') }}<br>
          </q-tab-panel>

          <q-tab-panel 
            name="movies"
            style="height: 220px"
            :style="
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">{{ $t('cards.labelCapacity') }}</div>
              {{ $t('cards.kennedyBCapacityStanding') }} <strong>500</strong><br>
              {{ $t('cards.kennedyBCapacitySeated') }} <strong>280</strong><br>
          </q-tab-panel>

          <q-tab-panel 
            name="package"
            style="height: 220px"
            :style="
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">{{ $t('cards.labelEnhancedPackage') }}</div>
              {{ $t('cards.oakEnhancedPackageOne') }}<br>
              {{ $t('cards.oakEnhancedPackageTwo') }}<br>
              {{ $t('cards.oakEnhancedPackageThree') }}
          </q-tab-panel>

        </q-tab-panels>
        </template>
        </q-splitter>
        </div>
        </q-card-section>
        </q-card>
  </template>

<script>
//import { openURL } from 'quasar'
    
	export default {
    data() {
      return {  
        slide: 1,
        tab: 'one',
        splitterModel: 20,
      }
    }  
  }
</script>

<style lang="scss" scoped>
  .space {
    padding: 2rem;
  }
</style>