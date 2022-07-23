<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon> {{ toolTip.icon }} </v-icon>
      </v-btn>
    </template>
    <span>{{ toolTip.title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    toolTip: {
      type: Object,
      required: true,
    },
  },
};
</script>
