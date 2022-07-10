<template>
  <v-app>
    <!-- Header -->
    <DefaultHeader :page-title="$route.name" />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DefaultHeader from "../components/layouts/Main/Header.vue";
export default {
  components: {
    DefaultHeader,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif !important;
}
</style>
