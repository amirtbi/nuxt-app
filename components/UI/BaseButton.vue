<template>
  <v-btn :class="classes" elevation="2" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    classes: {
      type: String,
      required: true,
    },
  },
};
</script>
