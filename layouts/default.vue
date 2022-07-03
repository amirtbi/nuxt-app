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
#app,
.v-application {
  background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
    no-repeat center center !important;
  background-size: cover !important;
}
</style>
