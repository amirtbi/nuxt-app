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
import AdminPostForm from "../../../components/UI/BaseForm.vue";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {};
  },
  methods: {
    AddPost(post) {
      this.posts.push(post);
      this.$router.push("/admin");
    },
    navigatePage() {
      this.$router.push("/admin");
    },
  },
};
</script>
