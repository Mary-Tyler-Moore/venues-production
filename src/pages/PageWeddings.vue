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
      >{{ $t('mainMenu.weddings') }}
      </h5>
      
    <div class="space"></div>
        <!-- Begin Mobile Section-->
        <div class="column items-center">

        <!-- Mobile Card 1 -->
      
        <oak-weddings-card></oak-weddings-card>

        <!-- End Mobile Card 1 -->

        <div class="space" />

        <!-- Begin Mobile Card 2 -->
        <kennedya-weddings-card></kennedya-weddings-card>
        <!-- End Mobile Card 2 -->

        <div class="space" />

        <!-- Begin Mobile Card 3 -->
        <atrium-card></atrium-card>
        <!-- End Mobile Card 3 -->

        </div>
        <!-- End Mobile Section -->

    <footer />

    </q-page>   
</template>

<script>
import { openURL } from 'quasar'
import OakWeddingsCard from "components/cards/OakWeddingsCard.vue"
import KennedyaWeddingsCard from "components/cards/KennedyaWeddingsCard.vue"
import AtriumCard from "components/cards/AtriumCard.vue"
import Footer from 'components/footer/Footer.vue'
    
	export default {
    components: {
      OakWeddingsCard,
      KennedyaWeddingsCard,
      AtriumCard,
      Footer
    },
    data() {
      return {  
        slide: 1,
        tab: 'one',
        splitterModel: 15,
      }
    }
  } 

</script>
<style lang="scss" scoped>
  .space {
    padding: 2rem;
  }

</style>