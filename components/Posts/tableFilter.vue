<template>
  <v-card-title>
    <v-autocomplete
      v-model="dataChoice"
      :items="selection"
      label="choice"
      item-text="title"
      item-value="id"
      @change="setFilterData($event)"
    >
    </v-autocomplete>
  </v-card-title>
</template>

<script>
export default {
  data() {
    return {
      dataChoice: "",
      selection: [
        { title: "type 1", id: 1 },
        { title: "type 2", id: 2 },
      ],
    };
  },
  methods: {
    setFilterData(choiceId) {
      console.log(typeof choiceId);
      console.log("second", this.dataChoice);
      this.$emit("filterEmitter", this.dataChoice);
    },
  },
};
</script>
