<template>
  <q-card
    class="my-mobile-card"
    :dark="$q.dark.isActive"
    :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'"
  >
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="statics/oak/wedding/bg-gallery-1.jpg" />
        <q-carousel-slide :name="2" img-src="statics/oak/wedding/bg-gallery-2.jpg" />
        <q-carousel-slide :name="3" img-src="statics/oak/wedding/bg-gallery-3.jpg" />
        <q-carousel-slide :name="4" img-src="statics/oak/wedding/bg-gallery-4.jpg" />
      </q-carousel>
    </div>

    <q-card-section>
      <div class="text-h6">The Kennedy Card</div>
      <!--
			<q-card-actions align="right">
              <q-btn @click="oakRoomVr" flat dense>View In VR</q-btn>
            </q-card-actions>
      -->
    </q-card-section>
    <q-tabs
      v-model="tab"
      :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'"
    >
      <q-tab label="Overview" name="one" />
      <q-tab label="Fee Schedule" name="two" />
      <q-tab label="Enhanced Package" name="three" />
      <q-tab label="Fee Includes" name="four" />
      <q-tab label="Capacity" name="five" />
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
      <q-tab-panel
        name="one"
      >Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.</q-tab-panel>
      <q-tab-panel name="two">
        <div class="row justify-around">
          <div class="<column items-center text-center">
            <div class="col-3" style="padding-bottom: 5%">
              <strong>MON-THURS • 8:00 AM - 9:00PM</strong>
              <br />
              <br />
              <strong>Half Day Rental</strong>
              <br />(up to 4 hours)
              <br />$700
              <br />Additional Hour: $85.00
              <br />
            </div>
            <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong>
              <br />(up to 8 hours)
              <br />$1000
              <br />Additional Hour: $85.00
              <br />
              <br />
            </div>
          </div>
          <div class="<column items-center text-center">
            <div class="col-3" style="padding-bottom: 5%">
              <strong>FRI - SAT • 8:00 AM - 9:00PM</strong>
              <br />
              <br />
              <strong>Half Day Rental</strong>
              <br />(up to 4 hours)
              <br />$1,650
              <br />Additional Hour: $300.00
              <br />
            </div>
            <div class="col-3" style="padding-top: 5%">
              <strong>Full Day Rental</strong>
              <br />(up to 8 hours)
              <br />$2,250
              <br />Additional Hour: $85.00
              <br />
            </div>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="four">
        • Internet/Wi-Fi
        <br />• Basic Sound System
        <br />• CD/DVD Capabilities
        <br />• Kitchen access for catering drop-off and staging
        <br />• Access to Atrium and Veranda for pre/post functions
        <br />
      </q-tab-panel>
      <q-tab-panel name="five">
        • Standing:
        <strong>500</strong>
        <br />• Seated: Up to
        <strong>280</strong>
        <br />
      </q-tab-panel>

      <q-tab-panel name="three">
        • 10 continguous hours on Saturday (between 8:00am and 12:00am)
        <br />• 6 continguous hours on the prior Thursday OR Friday for setup only(between 9:00am and 6:00pm)
        <br />• Includes dance floor
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { openURL } from "quasar";
export default {
  data() {
    return {
      slide: 1,
      tab: "one"
    };
  },
  methods: {
    oakRoomVr() {
      openURL("https://vrmap.netlify.com");
    }
  }
};
</script>

<style lang="scss" scoped>
.my-mobile-card {
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  min-height: 600px;
}
</style>
