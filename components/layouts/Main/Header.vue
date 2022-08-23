<template>
  <div>
    <v-app-bar app color="deep-purple">
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title v-if="$route.name">{{
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
              <UserCard />
            </v-menu>
            <v-menu
              v-model="card"
              :close-on-content-click="true"
              :nudge-width="200"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-avatar v-bind="attrs" v-on="on" size="36px">
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  />
                </v-avatar>
              </template>
              <UserCard />
            </v-menu>

            <span class="ml-2 text-h7 white--text">Amir</span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <!--Navigation bar-->
    <SideNav v-model="drawer" :nav-links="navLinks" @emitClose="toggleNav" />
  </div>
</template>

<script>
import SideNav from "./Navigation.vue";
import UserCard from "./userCard.vue";
export default {
  components: {
    SideNav,
    UserCard,
  },
  props: {
    pageTitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      drawer: false,

      menu: false,
      card: false,
      navLinks: [
        { title: "Home", icon: "mdi-home", route: "/" },
        { title: "About", icon: "mdi-store-cog", route: "/about" },
        { title: "Blog", icon: "mdi-inbox", route: "/posts" },
        {
          title: "Table",
          icon: "mdi-file-table",
          route: "/posts/table",
        },
        { title: "Admin", icon: "mdi-shield-crown-outline", route: "/admin" },
      ],
      links: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Messages", icon: "mdi-message-text-outline" },
        { title: "Settings", icon: "mdi-cog" },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.v-toolbar__title {
  width: 120px !important;
}
</style>
