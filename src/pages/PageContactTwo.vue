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
      >{{ $t('mainMenu.contact') }}
      </h5>

    <div class="space"></div>
    <!-- Begin Contact Section -->
    <iframe src="https://venuesatotc.com/contact2.html" height="1000px" width="100%" ></iframe>
    <!-- End Contact Section -->
    <footer />
    </q-page>   
</template>
<script>
import Footer from 'components/footer/Footer.vue'

export default {
  components: { Footer }
}
</script>