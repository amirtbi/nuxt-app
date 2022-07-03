<template>
  <div class="input-fields">
    <v-text-field
      v-if="controlType === 'input'"
      v-model="valueType"
      :counter="10"
      :label="inputName"
      required
      class="ma-4"
    ></v-text-field>
    <v-textarea
      v-if="controlType === 'textarea'"
      name="input-7-1"
      label="Default style"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      hint="Hint text"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: "",
    },
    valueType: { type: String, default: "" },
    inputName: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>
