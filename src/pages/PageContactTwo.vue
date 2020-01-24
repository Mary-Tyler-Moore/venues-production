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
    <iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8D4emf1yuLkUcDyzPVVP5u%2FSkills%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
    <footer />
    </q-page>   
</template>
<script>
import Footer from 'components/footer/Footer.vue'

export default {
  components: { Footer }
}
</script>