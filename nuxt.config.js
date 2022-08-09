import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - nuxi-app",
    title: "Nux2 app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,500&display=swap",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",

        href: "ttps://fonts.gstatic.com",
      },
    ],
  },
  loading: { color: "#3B8070" },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vuechart.plugin.js", ssr: false },
    { src: "~/plugins/composition.plugin.js" },
    { src: "~/plugins/core-components.js" },
    { src: "~/plugins/date-filter.js" },
    { src: "~/plugins/apex-chart.js", ssr: false },
    { src: "~/plugins/vee-validate.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      treeShake: true,
      defaultAssets: {
        font: {
          family: "Open sans",
        },
      },
      themes: {
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,
        // },
        // light: {
        //   primary: colors.purple.lighten4,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,
        // },
      },
    },
  },
  // router: {
  //   middleware: "routeData",
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["lodash-es", "vue-chart-3", "vee-validate/dist/rules"],
    vendor: ["vue-apexchart"],
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-2-cc469-default-rtdb.firebaseio.com",
  },
  router: {
    extendsRoutes(routes, resolve) {
      routes.push({
        path: "*",
        component: resolve(__dirname, "pages/index.vue"),
      });
    },
  },
  // Define transition
  transition: {
    name: "fade",
    mode: "out-in",
  },
};
