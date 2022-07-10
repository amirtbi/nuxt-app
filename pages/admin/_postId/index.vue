<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex justify-center text-center">
      <v-card width="600" max-width="600" class="pa-8">
        <v-card-title class="font-weight-bold justify-center"
          >Edit Post</v-card-title
        >
        <AdminPostForm :loaded-post="loadedPost" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AdminPostForm from "../../../components/Admin/Postform.vue";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        id: new Date().toISOString(),
        author: "Amir",
        title: "Learning Vue.js",
        previewText: "asasas",
        imageSrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
    };
  },
};
</script>
