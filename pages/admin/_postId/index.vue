<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex justify-center text-center">
      <v-card v-if="show" width="600" max-width="600" class="pa-8">
        <v-card-title class="font-weight-bold justify-center"
          >Edit Post</v-card-title
        >
        <AdminPostForm :id="postId" :loaded-post="post" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import { putRequest } from "../../../assets/js/axios/crud";

export default {
  props: {
    postId: {
      type: String,
      required: false,
    },
  },
  data() {
    return { show: true };
  },
  provide() {
    return {
      cancelHanlder: this.hideForm,
      modifyPost: this.editPost,
    };
  },
  computed: {
    ...mapGetters("postModule", ["post"]),
    postId() {
      return this.$route.params.postId;
    },
  },

  methods: {
    hideForm() {
      this.show = false;
    },
    async editPost(editedPost) {
      const post = { id: this.$route.params.postId, ...editedPost };
      try {
        await putRequest(this.$route.params.postId, editedPost);
        await this.$store.dispatch("postModule/editPost", post);
        this.$router.push("/admin");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  created() {
    //Find post
    this.$store.commit("postModule/findPost", this.$route.params.postId);
  },
};
</script>
