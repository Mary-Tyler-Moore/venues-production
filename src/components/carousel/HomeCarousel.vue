<template>
    <q-carousel
      :autoplay="autoplay"
      dark
      arrows
      animated
      swipeable
      ref="carousel"
      infinite
      v-model="slide"
      height="100vh"
      width="100wv"
      background-color="black"
    >
      <!--
      <q-carousel-slide v-if="$q.platform.is.desktop" name="first" img-src="statics/header-bg.jpg">
        <div class="absolute-center custom-caption" style="margin-top: -20em">
          <div class="text-h2">{{ $t("carousel.venuesText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.venuesSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')"  to="all" />
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="theAtrium()" />
        </div>
      </q-carousel-slide>
      -->c
      <q-carousel-slide name="first" img-src="statics/header-bg.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.venuesText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.venuesSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')"  to="all" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="theAtrium()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="statics/oak/wedding/bg-gallery-2.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.oakText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.oakSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="button-1" icon="meeting_room"  v-bind:label="$t('mainMenu.roomDetails')" to="/oak" />
          <q-btn glossy color="pink" class="button-2" icon="360" v-bind:label="$t('mainMenu.buttonVr')" @click="oakVR()" />
        </div>
        </q-carousel-slide>
      <q-carousel-slide name="third" img-src="statics/river/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.riverText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.riverSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/river" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth" img-src="statics/magnolia/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.magnoliaText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.magnoliaSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/magnolia" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fifth" img-src="statics/kennedyb/business/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.kennedybText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.kennedybSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/kennedyb" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="sixth" img-src="statics/ogeechee/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.ogeecheeText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.ogeecheeSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="button-1" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/ogeechee" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="seventh" img-src="statics/kennedya/wedding/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.kennedyaText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.kennedyaSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="button-1" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/kennedya" />
          <q-btn glossy color="pink" class="button-2" icon="360" v-bind:label="$t('mainMenu.buttonVr')" @click="kennedyaVR()" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="eighth" img-src="statics/computer/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.computerText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.computerSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/computer" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="nineth" img-src="statics/classroom/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.classroomText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.classroomSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/classroom" />
          <!--
          <q-btn glossy color="pink" class="button-2" icon="360" label="View in VR" @click="oakVR()" />
          -->
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tenth" img-src="statics/atrium/wedding/bg-gallery-1.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">{{ $t("carousel.atriumText") }}</div>
          <div class="text-subtitle1">{{ $t("carousel.atriumSub") }}</div>
          <q-btn glossy style="background: goldenrod; color: white" class="button-1" icon="meeting_room" v-bind:label="$t('mainMenu.roomDetails')" to="/atrium" />
          <q-btn glossy color="pink" class="button-2" icon="360" v-bind:label="$t('mainMenu.buttonVr')" @click="theAtrium()" />
        </div>
      </q-carousel-slide>
      
      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px 4px 0; border-radius: 4px"
        >
          <q-toggle dense dark color="orange" v-model="autoplay" v-bind:label="$t('carousel.autoPlay')" />
        </q-carousel-control>
      </template>
    </q-carousel>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: "HomeCarousel",
  data() {
    return {
      slide: "first",
      autoplay: true
    };
  },

  methods: {
    oakDetails() {
      openURL('https://www.venuesatotc.com')
    },
    kennedyaVR() {
      openURL('https://www.venuesatotc.com/tour/#Kennedy_Auditorium')
    },
    oakVR() {
      openURL('https://www.venuesatotc.com/tour/#The_Oak_Room')
    },
    theAtrium() {
      openURL('https://www.venuesatotc.com/tour/#The_Atrium')
    },
    venuesInfo() {
      openURL('https://venuesatotc.com')
    },
    allRooms() {
      openURL('https://venuesatotc.com/#/all')
    },
  }
};
</script>

<style scoped>

.carousel-light {
  background: linear-gradient(270deg, red, orange);
}
.carousel-dark {
  background: linear-gradient(270deg, purple, teal);
}

  .custom-caption {
    text-align: center;
    padding: 30px;
    color: white;
    background-color: rgba(0, 0, 0, .8);
    }

  .my-card {
    width: 100%;
    max-width: 10000px;
  }  

@media only screen and (max-width: 400px) {
  .text-h2 {
    font-size: 1em;
    line-height: .6em;
    padding-bottom: .2em;
  }
  .text-subtitle1 {
    line-height: .75em;
    font-size: .5em;
    padding-bottom: 1em;
  }
  .custom-caption {
    width: 50%;
  }
  .button-1 {
    margin-top: 1em;    
  }
  .button-2 {
    margin-top: 1em;
  }
}  

@media only screen and (max-width: 731px) {
  .text-h2 {
    font-size: 3em;
    line-height: .6em;
    padding-bottom: .2em;
  }
  .text-subtitle1 {
    line-height: .75em;
    font-size: 1.5em;
    padding-bottom: 1em;
  }
  .custom-caption {
    width: 50%;
  }
  .button-1 {
    margin-top: 1em;    
  }
  .button-2 {
    margin-top: 1em;
  }
}

@media only screen and (max-width: 759px) {
  .text-h2 {
    font-size: 4em;
    line-height: 1em;
    padding-bottom: .2em;
  }
  .text-subtitle1 {
    font-size: 1.5em;
    line-height: 1.1em;
    padding-bottom: 1em;
  }
  .custom-caption {
    text-align: center;
    padding: 30px;
    padding-top: 3em;
    width: 80%;
    color: white;
    background-color: rgba(0, 0, 0, .8);
    }
  .button-1 {
    transform: scale(.75);    
  }
  .button-2 {
    transform: scale(.75);
  }
}

@media only screen and (min-width: 760px) {
  .text-h2 {
    font-size: 6em;
    line-height: 1em;
    padding-bottom: .2em;
  }
  .custom-caption {
    text-align: center;
    padding: 30px;
    padding-top: 3em;
    width: 80%;
    color: white;
    background-color: rgba(0, 0, 0, .8);
    }
.text-subtitle1 {
  font-size: 2em;
  padding-bottom: 1em;
}
.button-1 {
  margin-right: 3em;
}
.button-2 {
  margin-left: 3em;
} 
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

</style>
