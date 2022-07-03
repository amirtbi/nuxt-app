<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app fixed permanent>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item nuxt to="/products">
            <v-list-item-icon>
              <v-icon>mdi-store-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color=" rgba(209,222,222,0,1)">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.params.prId }}</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If you are using pages -->
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,

      group: null,
    };
  },
};
</script>
