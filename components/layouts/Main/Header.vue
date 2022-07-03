<template>
  <div>
    <v-app-bar app color="deep-purple">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{
        $route.path === "/" ? "Home" : pageTitle.toUpperCase()
      }}</v-toolbar-title>
      <v-spacer />
      <v-container>
        <v-row align="center" justify="end">
          <v-col class="de-flex justify-end align-center text-right" cols="12">
            <v-menu
              v-model="menu"
              :close-on-content-click="true"
              :nudge-width="200"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  <v-icon>mdi-view-grid-outline</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-list>
                  <v-list-item
                    nuxt
                    v-for="(item, index) in navLinks"
                    :key="index"
                    :to="item.route"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-avatar size="36px">
              <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
            <span class="ml-2 text-h7 white--text">Amir</span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer color="purple lighten-5" app v-model="drawer" absolute>
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
  </div>
</template>

<script>
import NavigationDrawer from "./Navigation.vue";
export default {
  components: {
    NavigationDrawer,
  },
  props: {
    pageTitle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      drawer: false,
      group: null,
      menu: false,
      navLinks: [
        { title: "Home", icon: "mdi-home", route: "/" },
        { title: "About", icon: "mdi-store-cog", route: "/about" },
        { title: "Blog", icon: "mdi-inbox", route: "/posts" },
        { title: "Admin", icon: "mdi-shield-crown-outline", route: "/admin" },
      ],
    };
  },
};
</script>

<style scoped></style>
