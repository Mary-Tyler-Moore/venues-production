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
      >{{ $t('carousel.magnoliaText') }}
      </h5>

        <div class="column items-center">
        <magnolia-card />
        </div>
    <footer />
    </q-page>   
</template>

<script>
import { openURL } from 'quasar'
import MagnoliaCard from "components/cards/MagnoliaCard.vue"
import Footer from 'components/footer/Footer.vue'
 
	export default {
    components: {
      MagnoliaCard,
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