<template>
  <section>
    <v-card min-width="500" min-height="400">
      <FilterBar @filterEmitter="filterData" />
      <v-data-table :headers="headers" :items="customData" class="elevation-1">
        <template v-slot:item.calories="{ item }">
          <td class="custom-label">
            {{ item.calories }}
          </td>
        </template>
        <template v-slot:item.action="{ item }">
          <div
            v-for="(btn, index) in item.action"
            :class="checkClass(btn)"
            :key="index"
            class="d-flex"
          >
            <v-btn v-if="btn.edit" small icon @click="showEditForm(btn)">
              <v-icon>
                {{ btn.icon }}
              </v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:item.name="{ item }">
          <td class="text-center">
            <v-chip :color="getColor(item.name)" dark>
              {{ item.name }}
            </v-chip>
          </td>
        </template>
      </v-data-table>
    </v-card>
    <FormModal v-model="openModal" />
  </section>
</template>

<script>
import FilterBar from "../../../components/Posts/tableFilter.vue";
import FormModal from "../../../components/Posts/formModal.vue";
export default {
  components: {
    FormModal,
    FilterBar,
  },
  data() {
    return {
      openModal: false,
      interestList: null,
      filterType: "",
      formType: {
        value: "register",
      },
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "action", value: "action" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
          action: [
            { icon: "mdi-eye", edit: false },
            { icon: "mdi-pencil", edit: true },
          ],
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
      ],
      fruits: [
        {
          name: "Fruit",
          calories: 100,
          fat: 4,
          carbs: 10,
          protein: 3,
          iron: "2%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
        {
          name: "Apple",
          calories: 100,
          fat: 4,
          carbs: 10,
          protein: 3,
          iron: "2%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
        {
          name: "Mango",
          calories: 100,
          fat: 4,
          carbs: 10,
          protein: 3,
          iron: "2%",
          action: [
            { icon: "mdi-eye", edit: true },
            { icon: "mdi-pencil", edit: false },
          ],
        },
      ],
    };
  },
  computed: {
    listOValidAction() {
      const actionList = [];
      for (const item of this.desserts) {
        if (item.action.edit) {
          actionList.push(item);
        }
      }
    },
    customData() {
      if (this.filterType === "desserts") {
        return this.desserts;
      } else if (this.filterType === "fruits") {
        return this.fruits;
      } else {
        return this.desserts;
      }
    },
  },
  provide() {
    return {
      onSubmit: this.formHandler,
      formTitle: this.formType,
    };
  },
  methods: {
    filterData(id) {
      if (id === 1) {
        this.filterType = "desserts";
      } else if (id === 2) {
        this.filterType = "fruits";
      }
    },
    formHandler(actionType) {
      console.log("Emitted", actionType);
      if (actionType === "close") {
        this.closeForm();
      }
    },
    getColor(calories) {
      return "orange";
    },
    checkClass(item) {
      if (!item.edit) {
        return "hide";
      } else {
        return "";
      }
    },

    setInterestList(list) {
      console.log("selected item", list);
    },
    showEditForm(item) {
      console.log("icon clicked", item);
      if (item.icon === "mdi-eye") {
        this.formType.value = "detail";
        this.openModal = true;
        console.log("type", this.formType);
      } else {
        this.formType.value = "register";
        this.openModal = true;
        console.log("form type", this.formType);
      }
    },
    closeForm() {
      this.openModal = false;
    },
    submitForm() {
      const dataEntry = {
        favoirites: this.interestList,
      };
    },
  },
};
</script>
<style scoped>
.text-blue {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: blue !important;
}
.theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr {
  background-color: blue !important;
}
.theme--light.v-data-table
  >>> .v-data-table__wrapper
  > table
  > thead
  > tr
  > th {
  color: white !important;
}

td.custom-label {
  background-color: blueviolet !important;
  color: white !important;
  text-align: center;
  padding: 0.75rem;
}
.text-center {
  text-align: center !important;
}
.hide {
  display: none;
}
</style>
