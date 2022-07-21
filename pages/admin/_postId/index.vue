<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex justify-center text-center">
      <v-card width="600" max-width="600" class="pa-8">
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
import AdminPostForm from "../../../components/Admin/Postform.vue";
export default {
  components: {
    AdminPostForm,
  },
  props: {
    postId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("postModule", ["post"]),
    postId() {
      return this.$route.params.postId;
    },
  },
  created() {
    //Find post
    this.$store.commit("postModule/findPost", this.$route.params.postId);
  },
};
</script>
