<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: blue'"
			icon="chevron_left"
			label="Back"
			flat />

		<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: blue'"
      >Weddings & Socials
      </h5>
    <div class="space"></div>
        <!-- Begin Desktop Section -->
        <div class="column items-center" v-if="$q.platform.is.desktop">

        <!-- Desktop Card 1 -->    
        <q-card 
          class="my-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >
          <div>
            <iframe class="paniframe" name="_pano" src="https://vrmap.netlify.com/" frameborder="0" scrolling="no" height="550" width="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
          </div>

          <q-card-section>
            <div class="text-h6">The Oak Room2</div>
            <div class="text-subtitle2" style="padding-bottom: 5%">Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
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
               <q-tab name="schedule" icon="today" label="Fee schedule" />
               <q-tab name="alarms" icon="monetization_on" label="Fee Includes" />
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
                 name="schedule"
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
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">Capacity</div>
              • Standing: <strong>500</strong><br>
              • Seated: Up to <strong>280</strong><br>
          </q-tab-panel>
        </q-tab-panels>
        </template>
        </q-splitter>
        </div>
        </q-card-section>
        </q-card>
        <!-- End Desktop Card 1 -->

        <!-- Desktop Card 2 -->    
        <q-card 
          class="my-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >
          <div>
            <iframe class="paniframe" name="_pano" src="https://vrmap.netlify.com/" frameborder="0" scrolling="no" height="550" width="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
          </div>

          <q-card-section>
            <div class="text-h6">The Oak Room2</div>
            <div class="text-subtitle2" style="padding-bottom: 5%">Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
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
               <q-tab name="schedule" icon="today" label="Fee schedule" />
               <q-tab name="alarms" icon="monetization_on" label="Fee Includes" />
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
                 name="schedule"
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
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">Capacity</div>
              • Standing: <strong>500</strong><br>
              • Seated: Up to <strong>280</strong><br>
          </q-tab-panel>
        </q-tab-panels>
        </template>
        </q-splitter>
        </div>
        </q-card-section>
        </q-card>
        <!-- End Card 2 -->

        <!-- Card Card 3 -->    
        <q-card 
          class="my-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >
          <div>
            <iframe class="paniframe" name="_pano" src="https://vrmap.netlify.com/" frameborder="0" scrolling="no" height="550" width="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
          </div>

          <q-card-section>
            <div class="text-h6">The Oak Room2</div>
            <div class="text-subtitle2" style="padding-bottom: 5%">Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
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
               <q-tab name="schedule" icon="today" label="Fee schedule" />
               <q-tab name="alarms" icon="monetization_on" label="Fee Includes" />
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
                 name="schedule"
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
                $q.dark.isActive
                  ? 'background: #666666'
                  : 'background: white'"
                >
            <div class="text-h4 q-mb-md">Capacity</div>
              • Standing: <strong>500</strong><br>
              • Seated: Up to <strong>280</strong><br>
          </q-tab-panel>
        </q-tab-panels>
        </template>
        </q-splitter>
        </div>
        </q-card-section>
        </q-card>
        <!-- End Desktop Card 3 -->

        </div>
        <!-- End Desktop Section -->


        <!-- Begin Mobile Section-->
        <div class="column items-center" v-if="$q.platform.is.mobile">
        
        <!-- Mobile Card 1 -->
        <q-card 
          class="my-mobile-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >

          <div class="q-pa-md">
             <q-carousel
               animated
               v-model="slide"
               arrows
               navigation
               infinite
             >
               <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
               <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
               <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
               <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">The Oak Room</div>
			<q-card-actions align="right">
              <q-btn @click="oakRoomVr" flat dense>View In VR</q-btn>
            </q-card-actions>
          </q-card-section>
		  <q-tabs 
            v-model="tab" 
            :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'">
          <q-tab label="Overview" name="one" />
          <q-tab label="Fee Schedule" name="two" />
          <q-tab label="Fee Includes" name="three" />
          <q-tab label="Capacity" name="four" />
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
          Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
        </q-tab-panel>
        <q-tab-panel name="two">
          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>MON-THURS • 8:00 AM - 9:00PM</strong><br><br>    
              <strong>Half Day Rental</strong><br>
              (up to 4 hours)<br>
               $700<br>
               Additional Hour: $85.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong><br>
              (up to 8 hours)<br>
               $1000<br>
               Additional Hour: $85.00<br><br>
              </div>
            </div>
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%"> 
              <strong>FRI - SAT • 8:00 AM - 9:00PM</strong><br><br>       
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
        <q-tab-panel name="three">
          • Internet/Wi-Fi<br>
          • Basic Sound System<br>
          • CD/DVD Capabilities<br>
          • Kitchen access for catering drop-off and staging<br>
          • Access to Atrium and Veranda for pre/post functions<br>
        </q-tab-panel>
        <q-tab-panel name ="four">
          • Standing: <strong>500</strong><br>
          • Seated: Up to <strong>280</strong><br>
        </q-tab-panel>    
      </q-tab-panels>
        </q-card>
        <!-- End Mobile Card 1 -->

        <div class="space"></div>

        <!-- Begin Mobile Card 2 -->
        <q-card 
          class="my-mobile-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >

          <div class="q-pa-md">
             <q-carousel
               animated
               v-model="slide"
               arrows
               navigation
               infinite
             >
               <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
               <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
               <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
               <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">The Oak Room</div>
			<q-card-actions align="right">
              <q-btn @click="oakRoomVr" flat dense>View In VR</q-btn>
            </q-card-actions>
          </q-card-section>
		  <q-tabs 
            v-model="tab" 
            :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'">
          <q-tab label="Overview" name="one" />
          <q-tab label="Fee Schedule" name="two" />
          <q-tab label="Fee Includes" name="three" />
          <q-tab label="Capacity" name="four" />
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
          Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
        </q-tab-panel>
        <q-tab-panel name="two">
          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>MON-THURS • 8:00 AM - 9:00PM</strong><br><br>    
              <strong>Half Day Rental</strong><br>
              (up to 4 hours)<br>
               $700<br>
               Additional Hour: $85.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong><br>
              (up to 8 hours)<br>
               $1000<br>
               Additional Hour: $85.00<br><br>
              </div>
            </div>
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%"> 
              <strong>FRI - SAT • 8:00 AM - 9:00PM</strong><br><br>       
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
        <q-tab-panel name="three">
          • Internet/Wi-Fi<br>
          • Basic Sound System<br>
          • CD/DVD Capabilities<br>
          • Kitchen access for catering drop-off and staging<br>
          • Access to Atrium and Veranda for pre/post functions<br>
        </q-tab-panel>
        <q-tab-panel name ="four">
          • Standing: <strong>500</strong><br>
          • Seated: Up to <strong>280</strong><br>
        </q-tab-panel>    
      </q-tab-panels>
        </q-card>
        <!-- End Mobile Card 2 -->

        <div class="space"></div>

        <!-- Begin Mobile Card 3 -->

          <q-card 
          class="my-mobile-card"
          :dark="$q.dark.isActive"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
          >

          <div class="q-pa-md">
             <q-carousel
               animated
               v-model="slide"
               arrows
               navigation
               infinite
             >
               <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
               <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
               <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
               <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
             </q-carousel>
           </div>

          <q-card-section>
            <div class="text-h6">The Oak Room</div>
			<q-card-actions align="right">
              <q-btn @click="oakRoomVr" flat dense>View In VR</q-btn>
            </q-card-actions>
          </q-card-section>
		  <q-tabs 
            v-model="tab" 
            :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'">
          <q-tab label="Overview" name="one" />
          <q-tab label="Fee Schedule" name="two" />
          <q-tab label="Fee Includes" name="three" />
          <q-tab label="Capacity" name="four" />
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
          Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.
        </q-tab-panel>
        <q-tab-panel name="two">
          <div class="row justify-around">
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%">
              <strong>MON-THURS • 8:00 AM - 9:00PM</strong><br><br>    
              <strong>Half Day Rental</strong><br>
              (up to 4 hours)<br>
               $700<br>
               Additional Hour: $85.00<br>
              </div>
              <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong><br>
              (up to 8 hours)<br>
               $1000<br>
               Additional Hour: $85.00<br><br>
              </div>
            </div>
            <div class="<column items-center text-center">
              <div class="col-3" style="padding-bottom: 5%"> 
              <strong>FRI - SAT • 8:00 AM - 9:00PM</strong><br><br>       
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
        <q-tab-panel name="three">
          • Internet/Wi-Fi<br>
          • Basic Sound System<br>
          • CD/DVD Capabilities<br>
          • Kitchen access for catering drop-off and staging<br>
          • Access to Atrium and Veranda for pre/post functions<br>
        </q-tab-panel>
        <q-tab-panel name ="four">
          • Standing: <strong>500</strong><br>
          • Seated: Up to <strong>280</strong><br>
        </q-tab-panel>    
      </q-tab-panels>
        </q-card>
        <!-- End Mobile Card 3 -->

        </div>
        <!-- End Mobile Section -->
      </q-page>   
</template>

<script>
import { openURL } from 'quasar'
    
	export default {
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
			emailUs() {
				window.location.href = 'mailto:hello@awesometodo?subject=Awesome Todo Feedback'
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

  .my-mobile-card {
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  min-height: 600px;
  }
</style>