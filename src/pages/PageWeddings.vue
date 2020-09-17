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
      flat
    />
    <h5
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
    >{{ $t('mainMenu.weddings') }}</h5>
    <div class="space"></div>
    <div class="column items-center">
      <oak-weddings-card />
      <div class="space" />
      <kennedya-weddings-card />
      <div class="space" />
      <atrium-card />
    </div>
    <Footer />
  </q-page>
</template>

<script>
import { openURL } from "quasar";
import OakWeddingsCard from "components/cards/OakWeddingsCard.vue";
import KennedyaWeddingsCard from "components/cards/KennedyaWeddingsCard.vue";
import AtriumCard from "components/cards/AtriumCard.vue";
import Footer from "components/footer/Footer.vue";

export default {
  components: {
    OakWeddingsCard,
    KennedyaWeddingsCard,
    AtriumCard,
    Footer
  },
  data () {
    return {
      slide: 1,
      tab: "one",
      splitterModel: 15
    };
  }
};
</script>
<style lang="scss" scoped>
.space {
  padding: 2rem;
}
</style>
