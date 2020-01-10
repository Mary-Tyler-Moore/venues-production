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
               <q-carousel-slide :name="1" img-src="statics/oak/wedding/bg-gallery-1.jpg" />
               <q-carousel-slide :name="2" img-src="statics/oak/wedding/bg-gallery-2.jpg" />
               <q-carousel-slide :name="3" img-src="statics/oak/wedding/bg-gallery-3.jpg" />
               <q-carousel-slide :name="4" img-src="statics/oak/wedding/bg-gallery-4.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">The Atrium</div>
            <div class="text-subtitle2" style="padding-bottom: 5%">Walking into this two-story space of the Natural Resources Building, guests are greeted with 
              floor-to-ceiling courtyard windows, stone fireplace and columns, and a grand staircase. The Atrium is perfect for standing-style receptions and displays, both day and night. Whether alone or 
              combined with the Oak Room, the Atrium is simply gorgeous!
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
               <q-tab name="one" icon="today" label="Fee schedule" />
               <q-tab name="alarms" icon="monetization_on" label="Fee Includes" />
               <q-tab name="package" icon="alarm" label="Enhanced Package" />
               <q-tab name="movies" icon="people_alt" label="Capacity" />
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
                   style="margin-left: -19%"
                     >MON-THURS • 8:00 AM - 9:00PM </div>
                 <div 
                   class="text-h6 col-5"
                   style="margin-right: -19%"
                     >FRI - SAT • 8:00 AM - 9:00PM </div>
                 </div>  
               </div>

          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>Half Day Rental</strong><br>
              (up to 4 hours)<br>
               $700<br>
               Additional Hour: $85.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong><br>
              (up to 8 hours)<br>
               $1000<br>
               Additional Hour: $85.00<br>
              </div>
            </div>
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>Half Day Rental</strong><br>
              (up to 4 hours)<br>
               $1,650<br>
               Additional Hour: $300.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong><br>
              (up to 8 hours)<br>
               $2,250<br>
               Additional Hour: $85.00<br>
              </div>
            </div>
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
            <div class="text-h4 q-mb-md">Fee Includes</div>
              • Internet/Wi-Fi<br>
              • Basic Sound System<br>
              • CD/DVD Capabilities<br>
              • Kitchen access for catering drop-off and staging<br>
              • Access to Atrium and Veranda for pre/post functions<br>
          </q-tab-panel>

          <q-tab-panel 
            name="movies"
            style="height: 220px"
            :style="
                $
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">Capacity</div>
              • Standing: <strong>500</strong><br>
              • Seated: Up to <strong>280</strong><br>
          </q-tab-panel>

          <q-tab-panel 
            name="package"
            style="height: 220px"
            :style="
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">Enhanced Rental Package</div>
              • 10 continguous hours on Saturday (between 8:00am and 12:00am)<br>
              • 6 continguous hours on the prior Thursday OR Friday for setup only(between 9:00am and 6:00pm)<br>
              • Includes dance floor
          </q-tab-panel>

        </q-tab-panels>
        </template>
        </q-splitter>
        </div>
        </q-card-section>
        </q-card>
  </template>

<script>
import { openURL } from 'quasar'
    
	export default {
    data() {
      return {  
        slide:1,
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

  .my-card {
  width: 100%;
  max-width: 1000px;
  min-width: 1000px;
  }

</style>