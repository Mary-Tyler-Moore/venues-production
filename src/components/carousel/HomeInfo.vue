<template>   
<q-page padding>
    <div class="column items-center">
    <div class="space"></div>  
    <q-card 
    class="my-card"
    :dark="$q.dark.isActive"
    :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'" >
        
      <q-card-section>
        <div class="column items-center text-center">  
        <div class="text-h4" style="padding-bottom: 3%; padding-top: 2%">{{ $t("home.title") }}
        </div>
        <div class="text-h6" style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.pOne") }}
        </div>
        <div class="text-h6" style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.pTwo") }}
        </div>
        <div class="text-h6" style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.pThree") }}
        </div>
        </div>
      </q-card-section>
    </q-card>

    <q-space />
    <div class="space"></div>

    <q-card 
    class="my-card"
    :dark="$q.dark.isActive"
    :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'" >
        
      <q-parallax
        src="statics//ogeechee/bg-gallery-1.jpg"
        :height="400"
      >
      <q-btn
        class="absolute-top-right"
			  to="/business"
			  color="white"
			  icon="chevron_right"
			  v-bind:label="$t('mainMenu.business')"
			  flat
        style="font-size: 1.5em"
          /> 
      </q-parallax>

      <q-card-section>
        <div class="text-h4" style="padding-bottom: 1%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.cardBusiness") }}</div>  
        <div class="text-h5" style="padding-bottom: 2%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.textBusiness") }}</div>
      </q-card-section>
    </q-card>

    
    <div class="space"></div>

    <q-card 
      class="my-card"
      :dark="$q.dark.isActive"
      :class="$q.dark.isActive? 'bg-grey-9' : 'bg-grey-2'"
      >
      <q-parallax
        src="statics/oak/wedding/bg-gallery-1.jpg"
        :height="400"
      >
      <q-btn
          class="absolute-top-right"
			    to="/weddings"
			    color="white"
			    icon="chevron_right"
			    v-bind:label="$t('mainMenu.weddings')"
			    flat
          style="font-size: 1.5em" 
          /> 
      </q-parallax>

      <q-card-section>
        <div class="text-h4" style="padding-bottom: 1%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.cardWeddings") }}</div>
        <div class="text-h5" style="padding-bottom: 2%; padding-top:10px; padding-right: 3%; padding-left: 3%">{{ $t("home.textWeddings") }}</div>
      </q-card-section>
    </q-card>
    
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
    </div>
	</q-page> 
</template>

<script>
export default {
  name: "HomeInfo"    
}
</script>

<style lang="scss" scoped>
.content-light {
  color: black;
}
.content-dark {
  color: white;
}

  .space {
    padding: 1.5rem;
  }

  .my-card {
  width: 75vw;
  max-width: 1000px;
  }

</style>