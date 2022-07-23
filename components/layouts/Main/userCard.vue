<template>
  <v-card>
    <v-list class="card-header">
      <v-list-item
        color="purple lighten-4"
        class="d-flex flex-column justify-center"
      >
        <v-list-item-avatar class="ma-0 pa-0" width="60" height="60"
          ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-list-item-avatar>
        <v-list-item-content class="d-flex flex-column align-center">
          <v-list-item-title>Amir</v-list-item-title>
          <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content class="d-flex align-center">
          <div class="d-flex justify-center">
            <ToolTip
              v-for="(item, index) in toolTips"
              :key="index"
              :tool-tip="item"
            />
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item class="d-flex justify-center">
        <v-list-item-title class="text-center">
          <v-btn rounded outlined tile>
            Dashboard <v-icon right dark> mdi-home </v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import ToolTip from "./toolTip.vue";
export default {
  components: {
    ToolTip,
  },
  data() {
    return {
      toolTips: [
        { title: "Exit", icon: "mdi-exit-to-app" },
        { title: "Settings", icon: "mdi-cog" },
      ],
    };
  },
};
</script>
<style scoped>
.card-header {
  background: linear-gradient(180deg, #6a82fb, #fc5c7d);
}
.card-header .v-list-item {
  min-height: 0;
}
</style>
