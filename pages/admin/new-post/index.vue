<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex justify-center text-center">
      <v-card width="600" max-width="600" class="pa-8">
        <v-card-title class="font-weight-bold justify-center"
          >Create a new Post</v-card-title
        >
        <AdminPostForm @submitForm="AddPost" @onCancel="navigatePage" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import AdminPostForm from "../../../components/Admin/Postform.vue";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {};
  },
  methods: {
    async AddPost(post) {
      const api = "https://nuxt-2-cc469-default-rtdb.firebaseio.com/";
      try {
        const response = await axios.post(
          "https://nuxt-2-cc469-default-rtdb.firebaseio.com/posts.json",
          post
        );
        console.log("response", response.data);
        // this.$store.dispatch("postModule/setPosts", response.data);
        this.$router.push("/admin");
      } catch (error) {
        console.log("error happend");
      }
    },
    navigatePage() {
      this.$router.push("/admin");
    },
  },
};
</script>
