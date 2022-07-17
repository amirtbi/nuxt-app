<template>
  <v-app>
    <!-- Header -->
    <DefaultHeader :page-title="$route.name" />
    <transition name="fade">
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
    </transition>
  </v-app>
</template>

<script>
import DefaultHeader from "../components/layouts/Main/Header.vue";
export default {
  transition: {
    name: "fade",
    mode: "out-in",
  },
  components: {
    DefaultHeader,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  mounted() {
    console.log("route", this.$route);
  },
};
</script>

<style>
html,
body {
  font-family: "Open Sans", sans-serif !important;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-to,
.fade-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
