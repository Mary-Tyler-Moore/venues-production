  <template>
  <q-card
    class="my-mobile-card"
    :dark="$q.dark.isActive"
    :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'"
  >
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="statics/oak/business/bg-gallery-1.jpg" />
        <q-carousel-slide :name="2" img-src="statics/oak/business/bg-gallery-2.jpg" />
        <q-carousel-slide :name="3" img-src="statics/oak/business/bg-gallery-3.jpg" />
      </q-carousel>
    </div>

    <q-card-section>
      <div class="text-h6">{{ $t('carousel.oakText') }}</div>
      <q-card-actions align="right">
        <q-btn
          glossy
          color="pink"
          class="button-2"
          icon="360"
          v-bind:label="$t('mainMenu.buttonVr')"
          @click="oakRoomVr()"
        />
      </q-card-actions>
    </q-card-section>
    <q-tabs
      v-model="tab"
      :style="
              $q.dark.isActive
                ? 'color: white'
                : 'color:teal'"
    >
      <q-tab v-bind:label="$t('cards.labelOverview')" name="one" />
      <q-tab v-bind:label="$t('cards.labelFeeSchedule')" name="two" />
      <q-tab v-bind:label="$t('cards.labelEnhancedPackage')" name="three" />
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
      <q-tab-panel name="one">{{ $t('cards.oakText') }}</q-tab-panel>
      <q-tab-panel name="two">
        <div class="row justify-around">
          <div class="<column items-center text-center">
            <div class="col-3" style="padding-bottom: 5%">
              <strong>{{ $t('cards.weekDaySchedule') }}</strong>
              <br />
              <br />
              <strong>{{ $t('cards.halfDayRental') }}</strong>
              <br />
              ({{ $t('cards.fourHours') }})
              <br />$700
              <br />
              {{ $t('cards.additionalHour') }}: $85.00
              <br />
            </div>
            <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong>
              <br />
              ({{ $t('cards.eightHours') }})
              <br />$1000
              <br />
              {{ $t('cards.additionalHour') }}: $85.00
              <br />
              <br />
            </div>
          </div>
          <div class="<column items-center text-center">
            <div class="col-3" style="padding-bottom: 5%">
              <strong>{{ $t('cards.weekEndSchedule') }}</strong>
              <br />
              <br />
              <strong>{{ $t('cards.halfDayRental') }}</strong>
              <br />
              ({{ $t('cards.fourHours') }})
              <br />$1,650
              <br />
              {{ $t('cards.additionalHour') }}: $300.00
              <br />
            </div>
            <div class="col-3" style="padding-top: 5%">
              <strong>{{ $t('cards.fullDayRental') }}</strong>
              <br />
              ({{ $t('cards.eightHours') }})
              <br />$2,250
              <br />
              {{ $t('cards.additionalHour') }}: $300.00
              <br />
            </div>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="four">
        {{ $t('cards.oakFeeIncludesOne') }}
        <br />
        {{ $t('cards.oakFeeIncludesTwo') }}
        <br />
        {{ $t('cards.oakFeeIncludesThree') }}
        <br />
        {{ $t('cards.oakFeeIncludesFour') }}
        <br />
        {{ $t('cards.oakFeeIncludesFive') }}
        <br />
        {{ $t('cards.oakFeeIncludesSix') }}
        <br />
        {{ $t('cards.oakFeeIncludesSeven') }}
        <br />
        {{ $t('cards.oakFeeIncludesEight') }}
        <br />
        {{ $t('cards.oakFeeIncludesNine') }}
        <br />
      </q-tab-panel>
      <q-tab-panel name="five">
        {{ $t('cards.oakCapacityStanding') }}
        <strong>500</strong>
        <br />
        {{ $t('cards.oakCapacitySeated') }}
        <strong>280</strong>
        <br />
      </q-tab-panel>

      <q-tab-panel name="three">
        {{ $t('cards.oakEnhancedPackageOne') }}
        <br />
        {{ $t('cards.oakEnhancedPackageTwo') }}
        <br />
        {{ $t('cards.oakEnhancedPackageThree') }}
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
      openURL("https://www.venuesatotc.com/tour/#The_Oak_Room");
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
