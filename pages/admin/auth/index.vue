<template>
  <v-container class="mt-4">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card width="700px">
          <h3 v-if="loading">Sending data...</h3>
          <v-card-title class="text-center">
            Course Registeration
          </v-card-title>
          <RegistrationForm @emitForm="submitForm" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { postRequest } from "~/assets/js/axios/crud.js";
import RegistrationForm from "../../../components/Admin/AuthForm/form.vue";
export default {
  components: {
    RegistrationForm,
  },
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    // clearForm() {
    //   this.$refs.form.reset();
    // },
    async submitForm(formInfo) {
      this.loading = true;
      await postRequest("posts", formInfo);
      this.loading = false;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.avatar-bg {
  background-color: #ccc !important;
  border: 1px solid #ccc !important;
}
</style>
