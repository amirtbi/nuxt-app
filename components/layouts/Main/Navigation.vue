<template>
  <v-navigation-drawer
    color="purple lighten-5"
    :value="value"
    @input="$emit('input', $event)"
    v-if="value"
    fixed
    bottom
    app
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
        <div>
          <v-btn icon @click="emitClose">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-list-item>
    </template>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["navLinks", "value"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    emitClose() {
      this.$emit("emitClose");
    },
  },
};
</script>

<style scoped>
.v-image_image {
  background-image: linear-gradient(black, black),
    url("https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/sidebar-2.42e96f8d.jpg");
}
</style>
