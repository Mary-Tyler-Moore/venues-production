<template>
  <div>

  <!--
    <q-toggle v-model="darkMode" color="teal">
      <span :class="$q.dark.isActive ? 'dark-mode' : 'light-mode'"
        >Dark Mode</span
      ></q-toggle
    >
    -->
  </div>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get() {
        return this.$q.dark.isActive;
      },
      set() {
        this.$store.commit("toggleDarkMode");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>